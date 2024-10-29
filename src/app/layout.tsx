import 'styles/global.css';

import type { Metadata, Viewport } from 'next';

import { CodeKitConfig } from 'codekit';
import 'next-bricks/dist/index.css';

import NavigationProgressBar from 'components/NavigationProgressBar';
import { app } from 'config/app';
import { ContextProviders } from 'contexts';
import { ThemeProvider } from 'contexts/ThemeContext';
import { font } from 'styles/font';

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

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
		url: app.url,
		siteName: new URL(app.url).hostname,
		title: app.name,
		description: app.description,
		images: ['/og.png'],
	},
	twitter: {
		card: 'summary_large_image',
		site: app.url,
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
		<html lang="pt-BR" className={font.className}>
			<body>
				<ThemeProvider>
					<NavigationProgressBar />
					<CodeKitConfig />

					<ContextProviders>{children}</ContextProviders>
				</ThemeProvider>
			</body>
		</html>
	);
}
