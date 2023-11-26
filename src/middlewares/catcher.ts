/* eslint-disable @typescript-eslint/no-explicit-any */
import { errors } from 'config/firebase/errors';
import type { NextApiRequest, NextApiResponse } from 'next';

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<any>;

export const withCatcher = (handler: Handler) => {
	return (req: NextApiRequest, res: NextApiResponse) =>
		handler(req, res).catch((err) => {
			const error = err as any;
			const code = error.code;

			let message = error.message;

			if (code) message = (errors as any)[code];

			console.error('Error api route: ', error);
			res.status(400).json({ status: 'error', error: message });
		});
};
