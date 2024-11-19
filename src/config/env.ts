import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		APP_URL: z.string().url(),
	},

	client: {
		NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID: z.string().optional(),
	},

	runtimeEnv: {
		NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID:
			process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID,

		APP_URL: process.env.APP_URL,
	},
});
