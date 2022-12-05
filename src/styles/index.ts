import {
	DefaultTheme,
	ThemeProvider as ThemeProviderComponent,
	ThemeProviderProps,
} from 'styled-components';

export const ThemeProvider = ThemeProviderComponent as unknown as (
	props: ThemeProviderProps<AnyIfEmpty<DefaultTheme>>
) => JSX.Element;

type AnyIfEmpty<T extends object> = keyof T extends never ? unknown : T;
