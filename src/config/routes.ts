import { build, from, generate, get } from 'helpers/routes';

export const relations: Record<string, string> = {};

export const REFERENCES = {
	'/': {},
	'#': {},
	'*': {},

	logout: {},
};

export const formattedRoutes = generate(REFERENCES, relations);

export const routes = {
	all: formattedRoutes,
	get: get(formattedRoutes),
	from: from(formattedRoutes),
	build: build(formattedRoutes),
};

export type Route = keyof typeof formattedRoutes & string;
export type Routes = typeof formattedRoutes;
