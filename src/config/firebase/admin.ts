import * as admin from 'firebase-admin';
import { getApp, getApps, cert, App } from 'firebase-admin/app';

import serviceAccount from '../../../service-account.json';
import { firebaseConfig } from '../../../firebaseConfig';

interface GetAdminReturn {
    admin: typeof admin;
    app: App;
}

export function getAdmin(): GetAdminReturn {
	if (!getApps().find(app => app.name === 'server')) {
		admin.initializeApp(
			{
				credential: cert(serviceAccount as admin.ServiceAccount),
				...firebaseConfig,
			},
			'server'
		);
	}

	const adminApp = getApp('server');

	return {
		admin,
		app: adminApp,
	};
}
