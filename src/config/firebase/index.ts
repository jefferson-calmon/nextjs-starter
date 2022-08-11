import * as firebase from '@firebase/app';
import * as database from '@firebase/database';
import * as auth from '@firebase/auth';
import * as storage from '@firebase/storage';

import { firebaseConfig } from '../../../firebaseConfig';

if (!firebase.getApps().length) firebase.initializeApp(firebaseConfig);

export const app = firebase.getApp();

export const Database = database.getDatabase(app);
export const Auth = auth.getAuth(app);
export const Storage = storage.getStorage(app);

export const dbRef = (path: string) => database.ref(Database, path);
export const storageRef = (url?: string) => storage.ref(Storage, url);
