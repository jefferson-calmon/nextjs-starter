export const ApiService =
	() => `export function api(path: string, init?: RequestInit) {
	const baseUrl = '';
	const url = new URL('/api'.concat(path), baseUrl);

	return fetch(url, init);
}
`;
