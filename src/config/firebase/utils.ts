/* eslint-disable @typescript-eslint/no-explicit-any */
import * as database from 'firebase/database';
import * as storage from 'firebase/storage';

import { Storage, Database } from '.';

const dbRef = (...paths: string[]) => database.ref(Database, paths.join('/'));

const storageRef = (path: string) => storage.ref(Storage, path);

const dbQuery = (...paths: string[]) => {
	const path = paths.join('/');
	const ref = dbRef(path);

	return {
		get: () => database.get(ref),
		set: (value: any) => database.set(ref, value),
		update: (values: object) => database.update(ref, values),
	};
};

export { dbRef, storageRef, dbQuery };
