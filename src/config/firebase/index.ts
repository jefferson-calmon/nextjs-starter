import * as firebase from 'firebase/app';
import * as database from 'firebase/database';
import * as firestore from 'firebase/firestore';
import * as auth from 'firebase/auth';
import * as storage from 'firebase/storage';

import { firebaseConfig } from '../../../firebaseConfig';

if (!firebase.getApps().length) firebase.initializeApp(firebaseConfig);

export const app = firebase.getApp();

export const Auth = auth.getAuth(app);
export const Storage = storage.getStorage(app);
export const Database = database.getDatabase(app);
export const Firestore = firestore.getFirestore(app);

export const getAuth = () => auth.getAuth(app);
export const getStorage = () => storage.getStorage(app);
export const getDatabase = () => database.getDatabase(app);
export const getFirestore = () => firestore.getFirestore(app);

export * from './utils';
export * from './types';
