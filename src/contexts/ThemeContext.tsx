'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useMemo, useState } from 'react';

import { useIsomorphicLayoutEffect } from 'codekit';
import Cookies from 'js-cookie';

import { ThemeName, themes } from '../styles/themes';

interface ThemeContextProps {
	children: React.ReactNode;
}

export interface ThemeContextData {}

export const ThemeContext = createContext({} as ThemeContextData);

const DEFAULT_THEME_NAME: ThemeName = 'light';

export function ThemeProvider(props: ThemeContextProps) {
	// States
	const [theme, setTheme] = useState<ThemeName>(DEFAULT_THEME_NAME);

	// Memo vars
	const currentTheme = useMemo(() => themes[theme], [theme]);

	// Effects
	useIsomorphicLayoutEffect(() => {
		const theme = Cookies.get('theme') ?? DEFAULT_THEME_NAME;

		setTheme(theme as ThemeName);
	}, []);

	// Functions
	function toggleTheme() {
		const newTheme = theme === 'light' ? 'dark' : 'light';

		setTheme(newTheme);

		localStorage.setItem('theme', newTheme);
		Cookies.set('theme', newTheme, {
			expires: 9999,
		});
	}

	return (
		<ThemeContext.Provider
			value={{
				...currentTheme,
				toggle: toggleTheme,
			}}
		>
			<div
				className="theme-provider"
				style={
					{
						'--color-primary': currentTheme.colors.primary,
						'--color-secondary': currentTheme.colors.secondary,

						'--color-title': currentTheme.colors.title,
						'--color-text': currentTheme.colors.text,

						'--color-foreground': currentTheme.colors.foreground,
						'--color-background': currentTheme.colors.background,

						'--color-line': currentTheme.colors.line,
					} as React.CSSProperties
				}
			>
				{props.children}
			</div>
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);

export const withThemeContext = (Page: (...props: any) => JSX.Element) =>
	function PageWithThemeProvider(...props: any) {
		return (
			<ThemeProvider>
				<div>
					<Page {...props} />
				</div>
			</ThemeProvider>
		);
	};
