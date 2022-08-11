type Environment = 'development' | 'production' | 'test';

const appConfig = {
	production: {
		databaseURL: 'https://simule-it-default-rtdb.firebaseio.com',
	},
	development: {
		databaseURL: 'https://simule-it-default-rtdb.firebaseio.com',
	},
	test: {
		databaseURL: 'https://simule-it-default-rtdb.firebaseio.com',
	},
};

const environment: Environment =
	(process.env.NEXT_PUBLIC_ENVIRONMENT as Environment | undefined) ||
	'development';

export const firebaseConfig = {
	apiKey: 'AIzaSyDWeHi6XtGUOi7ctSdUE6apWTTIdEhMRAU',
	authDomain: 'simule-it.firebaseapp.com',
	databaseURL: appConfig[environment].databaseURL,
	projectId: 'simule-it',
	storageBucket: 'simule-it.appspot.com',
	messagingSenderId: '555419417303',
	appId: '1:555419417303:web:64972e087d84f22ede4e92',
	measurementId: 'G-1WC35Q6EF4',
};
