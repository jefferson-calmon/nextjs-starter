/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

import * as H from '../helpers/create.helpers.ts';
import { createFile } from '../helpers/index.ts';
import { exec } from '../utils/exec.ts';

export const CreateSchema = z.tuple([
	z.enum(['model', 'context', 'env']),
	z.string(),
	z.object({}),
	z.object({}).optional(),
]);

export async function create(...args: any[]) {
	const [item, name] = CreateSchema.parse(args);

	const files = await H.getFiles(item, name);
	const lastFile = files[files.length - 1];

	for (const file of files) {
		await createFile(file).then(async (result) => {
			if (file === lastFile) await exec(`code ${result.path}`);
		});
	}
}
