/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeyOf } from 'codekit';

import { Route, Routes } from 'config/routes';
import { flattenObject } from './flattenObject';

type Obj = Record<string, any>;

export function generate<Refs extends object, Rel extends Obj>(
	references: Refs,
	relations: Rel
) {
	const flatReferences: any = flattenObject(references);

	const entries = Object.entries(flatReferences).map(([key]) => {
		const value = key
			.split('.')
			.map((keyPart) => relations[keyPart] ?? keyPart)
			.join('/');

		const route = '/' + value;

		return [key, route];
	});

	const routes = {
		...Object.fromEntries(entries),

		'#': '#',
		'/': '/',
		'*': '/*',
	};

	return routes as Record<KeyOf<Refs> & string, string>;
}

export function build(routes: Routes) {
	return (ref: Route, ...params: string[]) => {
		let route = routes[ref];
		const matches = route.match(/\[(.*?)\]/g);

		if (!matches) return route;

		matches.forEach((match, index) => {
			const paramValue = params[index];
			if (!paramValue) return;

			route = route.replace(match, paramValue);
		});

		return route;
	};
}

export function from(routes: Routes) {
	return (route: keyof Routes) => [routes[route], routes[route] + '*'];
}

export function get(routes: Routes) {
	return (route: keyof Routes) => routes[route];
}
