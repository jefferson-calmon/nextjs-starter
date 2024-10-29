import { MetadataRoute } from 'next';

import { app } from 'config/app';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		host: new URL(app.url).host,
		sitemap: `${app.url}/sitemap.xml`,
	};
}
