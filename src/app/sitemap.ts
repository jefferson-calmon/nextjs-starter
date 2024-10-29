import { MetadataRoute } from 'next';

import { app } from 'config/app';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: app.url,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
			// alternates: {
			// 	languages: {
			// 		pl: `${env.APP_URL}/pl`,
			// 	},
			// },
		},
	];
}
