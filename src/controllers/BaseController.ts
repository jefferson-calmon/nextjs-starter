/* eslint-disable @typescript-eslint/no-explicit-any */
import * as database from 'firebase/database';

import { dbRef } from 'config/firebase';
import { handleObject } from 'utils/CryptoJSAES';

interface Options<T> {
	encrypt?: boolean | keyof T | (keyof T)[];
}

export interface OnResult<T> {
	data: database.DataSnapshot;
	array: T[];
	object: T;
}

class BaseController<T extends Record<string, any>> {
	constructor(basePath: string, options?: Options<T>) {
		this.basePath = basePath;
		this.encrypt = options?.encrypt || false;
	}

	private basePath = '';
	private encrypt: Options<T>['encrypt'] = false;

	async index() {
		const dataDbRef = dbRef(this.basePath);

		const datas = await database
			.get(dataDbRef)
			.then((snap) => snap.val())
			.then((data) => Object.values<T>(data || {}))
			.then((data) =>
				data.map((item) =>
					handleObject<T>('decrypt', item, this.encrypt)
				)
			);

		return datas;
	}

	async get(dataId: string) {
		const dataDbRef = dbRef(this.basePath, dataId);

		const data = await database
			.get(dataDbRef)
			.then((snap) => snap.val() as T | null);

		if (!data) return null;

		const newData = handleObject('decrypt', data, this.encrypt);

		return newData;
	}

	async create(data: T & Record<'id', string>) {
		const dataDbRef = dbRef(this.basePath, data.id);

		const newData = handleObject('encrypt', data, this.encrypt);

		await database.set(dataDbRef, newData);
	}

	async update(dataId: string, data: Partial<T>) {
		const dataDbRef = dbRef(this.basePath, dataId);

		const newData: Partial<T> & Record<'updatedAt', string> = {
			...data,
			updatedAt: new Date().toISOString(),
		};

		const newData1 = handleObject<typeof newData>(
			'encrypt',
			newData,
			this.encrypt
		);

		await database.update(dataDbRef, newData1);
	}

	async delete(dataId: string) {
		const dataDbRef = dbRef(this.basePath, dataId);

		await database.remove(dataDbRef);
	}

	async set(dataObj: unknown) {
		const dataDbRef = dbRef(this.basePath);

		await database.set(dataDbRef, dataObj);
	}

	on(path: string, callback: (result: OnResult<T>) => void) {
		const dataDbRef = dbRef(this.basePath, path);

		const cb = (snapshot: database.DataSnapshot) => {
			const data = snapshot.val();

			if (!data) throw new Error('Data not found');

			const object = handleObject('decrypt', data, this.encrypt);
			const array = Object.values(object).map((item) =>
				handleObject('decrypt', item, this.encrypt)
			);

			callback({
				data: snapshot,
				array,
				object,
			});
		};

		database.onValue(dataDbRef, cb);

		return () => database.off(dataDbRef, 'value', cb);
	}
}

export default BaseController;
