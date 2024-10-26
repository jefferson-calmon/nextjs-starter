/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

import * as H from '../helpers/setup.helpers.ts';

export const SetupSchema = z.tuple([
	z.enum(['api']),
	z.object({}),
	z.object({}).optional(),
]);

export async function setup(...args: any[]) {
	const [item] = SetupSchema.parse(args);

	const { action } = H.createSetup(item);

	await action();
}
