import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		TEST_ENV: z.string(),

		APP_URL: z.string().url(),
	},

	client: {},

	runtimeEnv: {
		TEST_ENV: process.env.TEST_ENV,

		APP_URL: process.env.APP_URL,
	},
});
