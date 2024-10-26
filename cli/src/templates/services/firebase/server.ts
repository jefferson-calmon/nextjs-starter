export const FirebaseServiceServer =
	() => `import { ServerFirestoreController } from '@next-firebase/data/server';
import { cert, getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

import { firebaseConfig } from '../config';
import { serviceAccount } from './serviceAccount';

const isInitializedServer = getApps().find((app) => app.name === 'server');
if (!isInitializedServer)
	initializeApp(
		{
			credential: cert(serviceAccount),
			...firebaseConfig,
		},
		'server',
	);

export const app = getApp('server');

export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

export const database = ServerFirestoreController(firestore);
`;
