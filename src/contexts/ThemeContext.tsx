/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useMemo, useState } from 'react';

import Cookies from 'js-cookie';

import { Theme } from '../models/Theme';
import { themes } from '../theme';
import { useIsomorphicLayoutEffect } from 'codekit';

interface ThemeContextProps {
	children: React.ReactNode;
}

export interface ThemeContextData extends Theme {
	toggle: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeContextProps): JSX.Element => {
	// States
	const [theme, setTheme] = useState<Theme['name']>(themes['light'].name);

	// Memo vars
	const currentTheme = useMemo(() => themes[theme], [theme]);

	// Effects
	useIsomorphicLayoutEffect(() => {
		const theme = (Cookies.get('theme') || 'light') as Theme['name'];

		setTheme(theme);
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
			{children}
		</ThemeContext.Provider>
	);
};
