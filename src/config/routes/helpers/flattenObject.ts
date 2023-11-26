/* eslint-disable @typescript-eslint/no-explicit-any */
export function flattenObject<T extends object>(
	obj: T,
	parentKey = '',
	separator = '.'
) {
	let flattened = {};

	for (const key in obj) {
		if (Object.hasOwnProperty.call(obj, key)) {
			const hasValues =
				typeof obj[key] === 'object' &&
				Object.values((obj as any)[key]).length > 0;

			const value = hasValues ? obj[key] : (true as any);
			const newKey = parentKey ? parentKey + separator + key : key;
			const subContainerKey = parentKey ? parentKey : key;

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
