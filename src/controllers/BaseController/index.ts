/* eslint-disable @typescript-eslint/no-explicit-any */
import * as rtdb from 'firebase/database';
import * as firestore from 'firebase/firestore';

import {
	dbRef,
	firestoreQuery,
	FirestoreQueryOptions,
	firestoreRef,
} from 'config/firebase';
import { decryptObject, encryptObject } from './utils/crypto';

interface Options<T> {
	encrypt?: boolean | keyof T | (keyof T)[];
}

export interface OnResult<T, D extends 'rtdb' | 'firestore'> {
	data: D extends 'rtdb' ? rtdb.DataSnapshot : firestore.DocumentSnapshot;
	array: T[];
	object: T;
}

class RtdbBaseController<T extends Record<string, any>> {
	constructor(basePath: string, options?: Options<T>) {
		this.basePath = basePath;
		this.encrypt = options?.encrypt || false;
	}

	private basePath = '';
	private encrypt: Options<T>['encrypt'] = false;

	async index() {
		const dataDbRef = dbRef(this.basePath);

		const datas = await rtdb
			.get(dataDbRef)
			.then((snap) => snap.val())
			.then((data) => Object.values<T>(data || {}))
			.then((data) => data.map((i) => decryptObject(i, this.encrypt)));

		return datas;
	}

	async get(dataId: string) {
		const dataDbRef = dbRef(this.basePath, dataId);

		const data = await rtdb
			.get(dataDbRef)
			.then((snap) => snap.val() as T | null);

		if (!data) return null;

		const newData = decryptObject(data, this.encrypt);

		return newData;
	}

	async create(data: T & Record<'id', string>) {
		const dataDbRef = dbRef(this.basePath, data.id);

		const newData = encryptObject(data, this.encrypt);

		await rtdb.set(dataDbRef, newData);
	}

	async update(dataId: string, data: Partial<T>) {
		const dataDbRef = dbRef(this.basePath, dataId);

		const newData: Partial<T> & Record<'updatedAt', string> = {
			...data,
			updatedAt: new Date().toISOString(),
		};

		const newData1 = encryptObject<typeof newData>(newData, this.encrypt);

		await rtdb.update(dataDbRef, newData1);
	}

	async delete(dataId: string) {
		const dataDbRef = dbRef(this.basePath, dataId);

		await rtdb.remove(dataDbRef);
	}

	async set(dataObj: unknown) {
		const dataDbRef = dbRef(this.basePath);

		await rtdb.set(dataDbRef, dataObj);
	}

	on(path: string, callback: (result: OnResult<T, 'rtdb'>) => void) {
		const dataDbRef = dbRef(this.basePath, path);

		const cb = (snapshot: rtdb.DataSnapshot) => {
			const data = snapshot.val();

			if (!data) throw new Error('Data not found');

			const object = decryptObject(data, this.encrypt);
			const array = Object.values(object).map((item) =>
				decryptObject(item, this.encrypt)
			);

			callback({
				data: snapshot,
				array,
				object,
			});
		};

		rtdb.onValue(dataDbRef, cb);

		return () => rtdb.off(dataDbRef, 'value', cb);
	}
}

class FirestoreBaseController<T extends Record<string, any>> {
	constructor(basePath: string, options?: Options<T>) {
		this.basePath = basePath;
		this.encrypt = options?.encrypt || false;
	}

	private basePath = '';
	private encrypt: Options<T>['encrypt'] = false;

	async index(options?: FirestoreQueryOptions<T>) {
		const dataQuery = firestoreQuery<T>(this.basePath, options || {});

		const datas = await firestore
			.getDocs(dataQuery)
			.then((snap) => snap.docs.map((doc) => doc.data() as T))
			.then((data) => data.map((i) => decryptObject(i, this.encrypt)));

		return datas;
	}

	async get(dataId: string) {
		const dataDocRef = firestoreRef(this.basePath, dataId);

		const dataSnap = await firestore.getDoc(dataDocRef);

		if (!dataSnap.exists()) return null;

		const data = dataSnap.data() as T;
		const newData = decryptObject(data, this.encrypt);

		return newData;
	}

	async create(data: T & Record<'id', string>) {
		const dataDocRef = firestoreRef(this.basePath, data.id);

		const newData = encryptObject(data, this.encrypt);

		await firestore.setDoc(dataDocRef, newData);
	}

	async update(dataId: string, data: Partial<T>) {
		const dataDocRef = firestoreRef(this.basePath, dataId);

		const newData: Partial<T> & Record<'updatedAt', string> = {
			...data,
			updatedAt: new Date().toISOString(),
		};

		const newData1 = encryptObject<typeof newData>(newData, this.encrypt);

		await firestore.updateDoc(dataDocRef, newData1);
	}

	async delete(dataId: string) {
		const dataDocRef = firestoreRef(this.basePath, dataId);

		await firestore.deleteDoc(dataDocRef);
	}

	async set(dataObj: any) {
		const dataDocRef = firestoreRef(this.basePath);

		await firestore.setDoc(dataDocRef, dataObj);
	}

	on(path: string, callback: (result: OnResult<T, 'firestore'>) => void) {
		const dataDocRef = firestoreRef(this.basePath, path);

		const onNext = (snapshot: firestore.DocumentSnapshot) => {
			const data = snapshot.data() as T;

			if (!data) throw new Error('Data not found');

			const object = decryptObject(data, this.encrypt);
			const array = Object.values(object).map((item) =>
				decryptObject(item, this.encrypt)
			);

			callback({
				data: snapshot,
				array,
				object,
			});
		};

		const unsubscribe = firestore.onSnapshot(dataDocRef, onNext);

		return () => unsubscribe();
	}
}

const BaseController = {
	rtdb: RtdbBaseController,
	firestore: FirestoreBaseController,
};

export default BaseController;
