const ENV_URLS = {
	development: '',
	production: '',
	testing: '',
};

const DEFAULT_URL = 'http://localhost:3000';

export function getOrigin(): string {
	const isBrowser = typeof window !== 'undefined';
	const url = isBrowser
		? window.location.origin
		: process.env.APP_URL ||
			process.env.URL ||
			process.env.VERCEL_URL ||
			DEFAULT_URL;

	if (process.env.NEXT_PUBLIC_ENVIRONMENT) {
		const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
		return ENV_URLS[environment as keyof typeof ENV_URLS] || url;
	}

	return url.includes('http') ? url : `https://${url}`;
}
