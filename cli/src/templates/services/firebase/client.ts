export const FirebaseServiceClient =
	() => `import { ClientFirestoreController } from '@next-firebase/data/client';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { firebaseConfig } from '../config';

const isInitialized = getApps().find((app) => app.name === 'client');
if (!isInitialized) initializeApp(firebaseConfig, 'client');

export const app = getApp('client');

export const Auth = getAuth(app);
export const Storage = getStorage(app);
export const Firestore = getFirestore(app);

export const database = ClientFirestoreController(Firestore);
`;
