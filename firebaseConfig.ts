type Environment = 'development' | 'production' | 'test';

const appConfig = {
	production: {
		databaseURL: '',
	},
	development: {
		databaseURL: '',
	},
	test: {
		databaseURL: '',
	},
};

const env = process.env.NEXT_PUBLIC_ENVIRONMENT as Environment | undefined;
const environment: Environment = env || 'development';

export const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
	measurementId: '',
	databaseURL: appConfig[environment].databaseURL,
};
