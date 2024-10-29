/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import { z } from 'zod';

import { SetupSchema } from '../commands/setup.ts';
import { ApiService } from '../templates/services/api.ts';
import { FirebaseServiceClient } from '../templates/services/firebase/client.ts';
import { FirebaseServiceConfig } from '../templates/services/firebase/config.ts';
import { FirebaseServiceErrors } from '../templates/services/firebase/errors.ts';
import { FirebaseServiceServer } from '../templates/services/firebase/server.ts';
import { FirebaseServiceServerServiceAccount } from '../templates/services/firebase/serverServiceAccount.ts';
import { exec } from '../utils/exec.ts';
import { addDependencies, createFile } from './index.ts';

type Item = z.infer<typeof SetupSchema>[0];
// type Options = z.infer<typeof SetupSchema>[1];

export function createSetup(item: Item) {
	const map = {
		api: apiSetupAction,
		firebase: firebaseSetupAction,
	} satisfies Record<Item, any>;

	return {
		action: map[item],
	};
}

async function apiSetupAction() {
	const result = await createFile({
		dir: path.join(path.resolve('src'), 'services'),
		name: 'api.ts',
		content: ApiService(),
	});

	await exec(`code ${result.path}`);
}

async function firebaseSetupAction() {
	await addDependencies({
		dependencies: ['firebase', 'firebase-admin', '@next-firebase/data'],
	});

	await createFile({
		dir: path.join(path.resolve('src'), 'services', 'firebase'),
		name: 'errors.ts',
		content: FirebaseServiceErrors(),
	});

	await createFile({
		dir: path.join(path.resolve('src'), 'services', 'firebase'),
		name: 'config.ts',
		content: FirebaseServiceConfig(),
	});

	await createFile({
		dir: path.join(path.resolve('src'), 'services', 'firebase', 'client'),
		name: 'index.ts',
		content: FirebaseServiceClient(),
	});

	await createFile({
		dir: path.join(path.resolve('src'), 'services', 'firebase', 'server'),
		name: 'index.ts',
		content: FirebaseServiceServer(),
	});

	await createFile({
		dir: path.join(path.resolve('src'), 'services', 'firebase', 'server'),
		name: 'serviceAccount.ts',
		content: FirebaseServiceServerServiceAccount(),
	});
}
