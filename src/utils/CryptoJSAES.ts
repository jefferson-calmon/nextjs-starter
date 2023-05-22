/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from 'crypto-js';

export function encrypt(value: string) {
	const key = process.env.NEXT_PUBLIC_AES_KEY || 'key';

	return CryptoJS.AES.encrypt(value, key).toString();
}

export function decrypt(value: string) {
	const key = process.env.NEXT_PUBLIC_AES_KEY || 'key';

	return CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
}

export function handleObject<T extends Record<string, any>>(
	action: 'encrypt' | 'decrypt',
	obj: T,
	properties?: boolean | keyof T | (keyof T)[]
): T {
	const object = { ...obj } as any;

	const isEncrypt = action === 'encrypt';
	const crypto = isEncrypt ? encrypt : decrypt;

	const isPropertiesTrue = properties === true;
	const isPropertiesArray = Array.isArray(properties);
	const isPropertiesString = typeof properties === 'string';

	if (isPropertiesTrue) {
		for (const key in object) {
			if (object.hasOwnProperty(key) && typeof object[key] === 'string') {
				object[key] = crypto(object[key]);
			}
		}
	}

	if (isPropertiesString) {
		if (
			object.hasOwnProperty(properties) &&
			typeof object[properties] === 'string'
		) {
			object[properties] = crypto(object[properties]);
		}
	}

	if (isPropertiesArray) {
		for (const item of object as unknown as any[]) {
			for (const key of properties) {
				if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
					item[key] = crypto(item[key]);
				}
			}
		}
	}

	return object;
}
