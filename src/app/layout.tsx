import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import '../styles/global.css';
import { app } from 'config/app';

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
	themeColor: '#fff',
	colorScheme: 'normal',
};

export const metadata: Metadata = {
	title: {
		template: `%s - ${app.name}`,
		default: app.name,
	},
	metadataBase: new URL('http://localhost:3000'),
	description: app.description,
	keywords: app.keywords,
	authors: [{ name: app.author.name, url: app.author.url }],
	robots: 'index, follow',
	openGraph: {
		type: 'website',
		url: `https://${app.site}`,
		siteName: app.site,
		title: app.name,
		description: app.description,
		images: ['/og.png'],
	},
	twitter: {
		card: 'summary_large_image',
		site: app.site,
		title: app.name,
		description: app.description,
		images: ['/og.png'],
	},
	icons: {
		icon: [
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				url: '/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				url: '/favicon-16x16.png',
			},
		],
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
