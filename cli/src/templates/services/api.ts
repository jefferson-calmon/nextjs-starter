export const ApiService = () => `import { createFetchInstance } from 'codekit';

export const api = createFetchInstance({
	baseUrl: '',
	onBeforeRequest: (options) => options,
	onResponse: (response) => response,
});
`;
