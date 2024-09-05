export type ThemeName = 'dark' | 'light';

export interface Theme {
	name: ThemeName;

	colors: {
		primary: string;
		secondary: string;

		background: string;
		foreground: string;
		line: string;

		title: string;
		text: string;
	};
}

export const dark: Theme = {
	name: 'dark',

	colors: {
		primary: '#fff',
		secondary: '',

		background: '#000',
		foreground: '#0a0a0a',
		line: '#ffffff26',

		title: '#EDEDED',
		text: '#A1A1A1',
	},
};

export const light: Theme = {
	name: 'light',

	colors: {
		primary: '#000',
		secondary: '',

		background: '#ffffff',
		foreground: '#fff',
		line: '#00000026',

		title: '#000',
		text: 'rgba(0, 0, 0, .75)',
	},
};

export const themes: Record<Theme['name'], Theme> = {
	dark,
	light,
};
