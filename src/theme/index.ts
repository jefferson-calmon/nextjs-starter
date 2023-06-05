import { Theme } from 'models/Theme';

export const dark: Theme = {
	name: 'dark',

	colors: {
		primary: '',
		secondary: '',

		background: '#101010',
		surface: '#16191C',
        line: '',

		title: '#FFFFFF',
		text: '#ADB5BD',
	},
};

export const light: Theme = {
	name: 'light',

	colors: {
		primary: '',
		secondary: '',

		background: '#ffffff',
		surface: '#f1f3f4',
        line: '#e7e7e9',

		title: 'rgb(0 0 0 / 100%)',
		text: 'rgb(0 0 0 / 75%)',
	},
};

export const themes: Record<Theme['name'], Theme> = {
	dark,
	light,
};
