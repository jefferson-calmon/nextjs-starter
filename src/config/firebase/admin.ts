import * as admin from 'firebase-admin';
import { getApp, getApps, cert } from 'firebase-admin/app';

import serviceAccount from '../../../service-account.json';
import { firebaseConfig } from '../../../firebaseConfig';

export function getAdmin() {
	if (!getApps().find((app) => app.name === 'server')) {
		admin.initializeApp(
			{
				credential: cert(serviceAccount as admin.ServiceAccount),
				...firebaseConfig,
			},
			'server'
		);
	}

	const app = getApp('server');
	const database = admin.database(app);
	const storage = admin.storage(app);
	const auth = admin.auth(app);
    const firestore = admin.firestore(app);

	return {
		app,
		database,
		storage,
		auth,
        firestore
	};
}
