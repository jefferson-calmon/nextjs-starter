/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAdmin } from 'config/firebase/admin';

function createDbRef(...paths: string[]) {
	const { database } = getAdmin();

	return database.ref(paths.join('/'));
}

class BaseController<T> {
	constructor(basePath: string) {
		this.basePath = basePath;
	}

	private basePath = '';

	async index() {
		const dataDbRef = createDbRef(this.basePath);

		const datas = await dataDbRef
			.get()
			.then((snap) => snap.val())
			.then((data) => Object.values<T>(data || {}));

		return datas;
	}

	async get(dataId: string) {
		const dataDbRef = createDbRef(this.basePath, dataId);

		const data = await dataDbRef
			.get()
			.then((snap) => snap.val() as T | null);

		return data;
	}

	async create(data: T & Record<'id', string>) {
		const dataDbRef = createDbRef(this.basePath, data.id);

		await dataDbRef.set(data);
	}

	async update(dataId: string, data: Partial<T>) {
		const dataDbRef = createDbRef(this.basePath, dataId);

		const newData: Partial<T> & Record<'updatedAt', string> = {
			...data,
			updatedAt: new Date().toISOString(),
		};

		await dataDbRef.update(newData);
	}

	async delete(dataId: string) {
		const dataDbRef = createDbRef(this.basePath, dataId);

		await dataDbRef.remove();
	}

	async set(dataId: string, dataObj: unknown) {
		const dataDbRef = createDbRef(this.basePath, dataId);

		await dataDbRef.set(dataObj);
	}
}

export default BaseController;
