import baseX from 'base-x';

const b58 = baseX('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');

const prefixes = {
	test: 'test',
} as const;

export function id<TPrefix extends keyof typeof prefixes>(prefix: TPrefix) {
	const buf = crypto.getRandomValues(new Uint8Array(20));

	const EPOCH_TIMESTAMP = 1_700_000_000_000; // Epoch start for compact timestamp

	const t = Date.now() - EPOCH_TIMESTAMP; // Time in ms since epoch

	// Split time into 4 bytes (for compact, unique, time-ordered ID)
	buf[0] = (t >>> 24) & 255;
	buf[1] = (t >>> 16) & 255;
	buf[2] = (t >>> 8) & 255;
	buf[3] = t & 255;

	return `${prefixes[prefix]}_${b58.encode(buf)}` as const;
}
