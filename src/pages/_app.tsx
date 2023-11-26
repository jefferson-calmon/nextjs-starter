import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import { CodeKitConfig } from 'codekit';
import { AresUIProvider, NavigationProgressBar } from 'aresui';

import { app } from 'config/app';
import { useTheme } from 'hooks/useTheme';
import { ThemeProvider as AppThemeProvider } from 'contexts/ThemeContext';
import { ThemeProvider as StyledThemeProvider } from 'styles/index';
import { ContextProviders } from 'contexts';

import { GlobalStyle } from '../styles/global';

function MyApp(appProps: AppProps): JSX.Element {
	return (
		<AppThemeProvider>
			<Container {...appProps} />
		</AppThemeProvider>
	);
}

const Container = ({ Component, pageProps }: AppProps): JSX.Element => {
	// Hooks
	const theme = useTheme();

	return (
		<StyledThemeProvider theme={theme}>
			<GlobalStyle />
			<CodeKitConfig />

			<DefaultSeo title={app.name} />
			<NavigationProgressBar color={theme.colors.primary} />

			<AresUIProvider
				config={{ app }}
				theme={{
					colors: {
						primary: theme.colors.primary,
						background: theme.colors.background,
						line: theme.colors.line,
					},
				}}
			>
				<ContextProviders>
					<Component {...pageProps} />
				</ContextProviders>
			</AresUIProvider>
		</StyledThemeProvider>
	);
};

export default MyApp;
