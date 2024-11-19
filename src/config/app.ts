import { env } from './env';

const APP_URL = new URL(
	process.env.APP_URL ?? 'https://example.com',
).toString();

export const app = {
	id: 'next-starter',
	name: 'App',
	description: '',
	url: APP_URL,
	keywords: [],
	author: {
		name: 'Jefferson Calmon',
		url: 'https://jeffersoncalmon.dev',
	},
	copyright: {
		name: '',
		url: APP_URL,
	},
	googleSiteVerificationId: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID ?? '',
};
