/* eslint-disable @typescript-eslint/no-explicit-any */
import * as database from 'firebase/database';
import * as firestore from 'firebase/firestore';
import * as storage from 'firebase/storage';

import { FirestoreQueryOptions } from './types';
import { Storage, Database, Firestore } from '.';

const dbRef = (...paths: string[]) => database.ref(Database, paths.join('/'));

const storageRef = (path: string) => storage.ref(Storage, path);

function firestoreQuery<T extends Record<string, any>>(
	path: string,
	options: FirestoreQueryOptions<T>
) {
	const { where, orderBy, limit, startAfter, endBefore } = firestore;

	const queryConstraints = [
		...getFiltersQueries(),
		options.orderByField ? orderBy(options.orderByField) : null,
		options.limitValue ? limit(options.limitValue) : null,
		options.startAfterValue ? startAfter(options.startAfterValue) : null,
		options.endBeforeValue ? endBefore(options.endBeforeValue) : null,
	].compact();

	const collection = firestore.collection(Firestore, path);
	const query = firestore.query(collection, ...queryConstraints);

	function getFiltersQueries() {
		return (options.filters || []).map((filter) => {
			const [field, operator, value] = filter;
			return where(field, operator, value);
		});
	}

	return query;
}

function firestoreRef(basePath: string, ...paths: string[]) {
	const documentReference = firestore.doc(Firestore, basePath, ...paths);

	return documentReference;
}

export { dbRef, storageRef, firestoreQuery, firestoreRef };
