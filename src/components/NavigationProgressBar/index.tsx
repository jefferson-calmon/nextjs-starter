'use client';

import { NavigationProgressBar as NBNavigationProgressBar } from 'next-bricks';

import { useTheme } from 'contexts/ThemeContext';

function NavigationProgressBar() {
	// Hooks
	const theme = useTheme();

	return <NBNavigationProgressBar color={theme.colors.primary} />;
}

export default NavigationProgressBar;
