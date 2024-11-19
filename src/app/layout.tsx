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
	metadataBase: new URL(app.url),
	title: {
		default: app.name,
		template: `%s - ${app.name}`,
	},
	description: app.description,
	keywords: app.keywords,
	robots: {
		index: true,
		follow: true,
	},
	verification: {
		google: app.googleSiteVerificationId,
	},
	authors: app.authors.map((author) => ({
		name: author.name,
		url: author.url,
	})),
	openGraph: {
		type: 'website',
		url: app.url,
		siteName: app.name,
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
		icon: '/favicon.ico',
		shortcut: '/favicon.png',
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
