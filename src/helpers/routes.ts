/* eslint-disable @typescript-eslint/no-explicit-any */
import { KeyOf } from 'codekit';

import { Route, Routes } from 'config/routes';
type Obj = Record<string, any>;

export function flattenObject<T extends object>(
	obj: T,
	parentKey = '',
	separator = '.',
) {
	let flattened = {};

	for (const key in obj) {
		if (Object.hasOwnProperty.call(obj, key)) {
			const hasValues =
				typeof obj[key] === 'object' &&
				Object.values((obj as any)[key]).length > 0;

			const value = hasValues ? obj[key] : (true as any);
			const newKey = parentKey ? parentKey + separator + key : key;
			const subContainerKey = parentKey || key;

			if (typeof value === 'object' && !Array.isArray(value)) {
				const nested = flattenObject(value, newKey, separator);
				flattened = {
					...flattened,
					...nested,
					[subContainerKey]: true,
				};
			} else {
				(flattened as any)[newKey] = value;
				(flattened as any)[subContainerKey] = true;
			}
		}
	}

	return flattened;
}

export function generate<Refs extends object, Rel extends Obj>(
	references: Refs,
	relations: Rel,
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

		matches.forEach((match: any, index: string | number) => {
			const paramValue = params[Number(index)];
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
