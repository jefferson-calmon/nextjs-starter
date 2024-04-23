import { ThemeProvider as ThemeProviderComponent } from 'styled-components';

type ThemeProviderProps = Parameters<typeof ThemeProviderComponent>['0'];

export const ThemeProvider = ThemeProviderComponent as unknown as (
	props: ThemeProviderProps
) => JSX.Element;
