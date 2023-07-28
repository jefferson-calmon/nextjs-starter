/* eslint-disable @typescript-eslint/no-explicit-any */
import { crypto } from 'pandora-tools';

type O = Record<string, any>;
type Props<T> = [obj: T, criteria?: boolean | keyof T | (keyof T)[]];

export function encryptObject<T extends O>(...props: Props<T>): T {
	const [object, criteria] = props;

	return crypto.AES.cryptObject<T>('encrypt', object, criteria as any);
}

export function decryptObject<T extends O>(...props: Props<T>): T {
	const [object, criteria] = props;

	return crypto.AES.cryptObject<T>('decrypt', object, criteria as any);
}
