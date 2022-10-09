import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import { PandoraConfig } from 'pandora-tools';
import { IdonProvider } from 'idon';

import { app } from 'config/app';
import { ThemeProvider, light } from 'theme';

import { GlobalStyle } from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
	<ThemeProvider theme={light}>
		<GlobalStyle />
		<PandoraConfig />

		<DefaultSeo title={app.name} />

		<IdonProvider
			config={{
				appName: app.name,
			}}
			theme={{ mainColor: '#000' }}
		>
			<Component {...pageProps} />
		</IdonProvider>
	</ThemeProvider>
);

export default MyApp;
