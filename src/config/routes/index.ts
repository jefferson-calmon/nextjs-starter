/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Helpers from './helpers';
import { references, relations } from './config';

export const formattedRoutes = Helpers.generate(references, relations);

export type Route = keyof typeof formattedRoutes & string;
export type Routes = typeof formattedRoutes;

export const routes = {
	all: formattedRoutes,
	get: Helpers.get(formattedRoutes),
	from: Helpers.from(formattedRoutes),
	build: Helpers.build(formattedRoutes),
};
