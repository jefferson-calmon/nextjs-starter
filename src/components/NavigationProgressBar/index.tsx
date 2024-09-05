'use client';

import NextTopLoader from 'nextjs-toploader';

import { useTheme } from 'contexts/ThemeContext';

function NavigationProgressBar() {
	// Hooks
	const theme = useTheme();

	return (
		<NextTopLoader
			color={theme.colors.primary}
			initialPosition={0.3}
			crawl={true}
			crawlSpeed={200}
			height={2.5}
			showSpinner={true}
		/>
	);
}

export default NavigationProgressBar;
