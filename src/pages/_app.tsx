import { Suspense } from 'react';
import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import { CodeKitConfig } from 'codekit';
import { AresUIProvider, NavigationProgressBar } from 'aresui';
import { SkeletonTheme } from 'react-loading-skeleton';

import LoadingFullScreen from 'components/LoadingFullscreen';
import { app } from 'config/app';
import { useTheme } from 'hooks/useTheme';
import { ThemeProvider as AppThemeProvider } from 'contexts/ThemeContext';
import { ThemeProvider as StyledThemeProvider } from 'styles/index';
import { ContextProviders } from 'contexts';

import { GlobalStyle } from '../styles/global';
import 'react-loading-skeleton/dist/skeleton.css';

function MyApp(appProps: AppProps): JSX.Element {
	return (
		<Suspense fallback={<LoadingFullScreen />}>
		    <AppThemeProvider>
    			<Container {...appProps} />
    		</AppThemeProvider>
		</Suspense>
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
				<SkeletonTheme>
				    <ContextProviders>
    					<Component {...pageProps} />
    				</ContextProviders>
				</SkeletonTheme>
			</AresUIProvider>
		</StyledThemeProvider>
	);
};

export default MyApp;
