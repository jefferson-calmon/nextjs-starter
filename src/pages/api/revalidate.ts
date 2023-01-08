import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void | unknown> {
    const routeQuery = req.query.route;

    if (!routeQuery) return res.send('No route passed in the query param `route`');

	try {
        const routes = [routeQuery].flat(Infinity) as string[];

        return res.json(routes)

        await Promise.all(routes.map(async route => await res.revalidate(route)));

		return res.json({ revalidated: true, routes });
	} catch (err) {
		return res.status(500).send('Error revalidating');
	}
}

export default handler;
