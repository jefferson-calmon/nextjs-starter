/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import { z } from 'zod';

import { exec } from '../utils/exec.ts';
import { SetupSchema } from '../commands/setup.ts';
import { ApiService } from '../templates/services/api.ts';
import { createFile } from './index.ts';

type Item = z.infer<typeof SetupSchema>[0];
// type Options = z.infer<typeof SetupSchema>[1];

export function createSetup(item: Item) {
	const map = {
		api: apiSetupAction,
	} satisfies Record<Item, any>;

	return {
		action: map[item],
	};
}

async function apiSetupAction() {
	const result = await createFile({
		dir: path.join(path.dirname(''), 'services'),
		name: 'api.ts',
		content: ApiService(),
	});

	await exec(`code ${result.path}`);
}
