export const FirebaseServiceServerServiceAccount =
	() => `import { ServiceAccount as FirebaseServiceAccount } from 'firebase-admin/app';

import { env } from 'config/env';

interface ServiceAccount extends FirebaseServiceAccount {
	type: string;
	project_id: string;
	private_key_id: string;
	private_key: string;
	client_email: string;
	client_id: string;
	auth_uri: string;
	token_uri: string;
	auth_provider_x509_cert_url: string;
	client_x509_cert_url: string;
	universe_domain: string;
}

export const serviceAccount: ServiceAccount = {
	type: 'service_account',
	project_id: env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
	private_key_id: env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
	private_key: env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
	client_email: env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
	client_id: env.FIREBASE_SERVICE_ACCOUNT_CLIENT_ID,
	client_x509_cert_url: env.FIREBASE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL,
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	universe_domain: 'googleapis.com',
};
`;
