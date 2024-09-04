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
		primary: '',
		secondary: '',

		background: '#101010',
		foreground: '#16191C',
		line: '',

		title: '#FFFFFF',
		text: '#ADB5BD',
	},
};

export const light: Theme = {
	name: 'light',

	colors: {
		primary: '#000',
		secondary: '',

		background: '#ffffff',
		foreground: '#f1f3f4',
		line: '#e7e7e9',

		title: 'rgb(0 0 0 / 100%)',
		text: 'rgb(0 0 0 / 75%)',
	},
};

export const themes: Record<Theme['name'], Theme> = {
	dark,
	light,
};
