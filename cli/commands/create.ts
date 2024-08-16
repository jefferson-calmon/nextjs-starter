/* eslint-disable @typescript-eslint/no-explicit-any */
import * as prompt from '@clack/prompts';
import { z } from 'zod';
import { join } from 'path';
import chalk from 'chalk';

import * as H from '../helpers/create.helpers.ts';
import { writeFile } from '../utils/fs.ts';
import { exec } from '../utils/exec.ts';

export const CreateSchema = z.tuple([
	z.enum(['model', 'component', 'context']),
	z.string(),
	z.object({}),
	z.object({}).optional(),
]);

export async function create(...args: any[]) {
	const [item, name] = CreateSchema.parse(args);

	const files = H.getFiles(item, name);

	const loading = prompt.spinner();
	const lastFile = files[files.length - 1];

	for (const file of files) {
		const [name, dir, path] = [
			chalk.cyan(file.name),
			chalk.magenta(file.dir),
			join(file.dir, file.name),
		];

		loading.start(`Criando arquivo ${name} em ${dir}`);

		const { success } = await writeFile(path, file.content);

		const message = success
			? 'foi criado com sucesso'
			: 'falhou ao ser criado';

		if (file === lastFile) await exec(`code ${path}`);

		loading.stop(`O arquivo ${name} ${message} em ${dir}`);
	}
}
