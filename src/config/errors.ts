import { Obj } from 'types';

export const errors = {
	/** Ex:
     * user: {
		notFound: `Não foi possível encontrar o usuário referente a "{{ id }}"`,
	}, */
};

export function render(error: string, query?: Obj | string) {
	let message: string = error;

	if (typeof query === 'object' && query !== null) {
		for (const key in query) {
			if (Object.prototype.hasOwnProperty.call(query, key)) {
				const value = String(query[key]);
				message = message.replaceAll(
					new RegExp(`{{\\s*${key}\\s*}}`, 'g'),
					value,
				);
			}
		}
	} else if (typeof query === 'string') {
		message = message.replaceAll(/{{\s*(.*?)\s*}}/g, query);
	}

	return message;
}
