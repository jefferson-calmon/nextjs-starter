import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/global.css';
import { app } from 'config/app';

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: [app.name].join(' - '),
	description: app.description,
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
