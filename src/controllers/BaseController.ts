import * as database from 'firebase/database';

import { dbRef } from 'config/firebase';

class BaseController<T> {
	constructor(basePath: string) {
		this.basePath = basePath;
	}

	private basePath = '';

	async index() {
		const dataDbRef = dbRef(this.basePath);

		const datas = await database
			.get(dataDbRef)
			.then((snap) => snap.val())
			.then((data) => Object.values<T>(data || {}));

		return datas;
	}

	async get(dataId: string) {
		const dataDbRef = dbRef(this.basePath, dataId);

		const data = await database
			.get(dataDbRef)
			.then((snap) => snap.val() as T | null);

		return data;
	}

	async create(data: T & Record<'id', string>) {
		const dataDbRef = dbRef(this.basePath, data.id);

		await database.set(dataDbRef, data);
	}

	async update(dataId: string, data: Partial<T>) {
		const dataDbRef = dbRef(this.basePath, dataId);

		const newData: Partial<T> & Record<'updatedAt', string> = {
			...data,
			updatedAt: new Date().toISOString(),
		};

		await database.update(dataDbRef, newData);
	}

	async delete(dataId: string) {
		const dataDbRef = dbRef(this.basePath, dataId);

		await database.remove(dataDbRef);
	}

	async set(dataObj: unknown) {
		const dataDbRef = dbRef(this.basePath);

		await database.set(dataDbRef, dataObj);
	}

	on(path: string, callback: (snapshot: database.DataSnapshot) => void) {
		const dataDbRef = dbRef(this.basePath, path);

		database.onValue(dataDbRef, callback);

		return () => database.off(dataDbRef, 'value', callback);
	}
}

export default BaseController;
