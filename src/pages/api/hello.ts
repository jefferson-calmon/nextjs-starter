import { withCatcher } from 'middlewares/catcher';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
	return res.status(200).json({ name: 'John Doe' });
}

export default withCatcher(handler);
