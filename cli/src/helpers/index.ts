import { spinner } from '@clack/prompts';
import chalk from 'chalk';
import { join } from 'path';

import { writeFile } from '../utils/fs.ts';

export interface AppFile {
	name: string;
	dir: string;
	content: string;
}

export async function createFile(file: AppFile) {
	const loading = spinner();

	const [name, dir, path] = [
		chalk.cyan(file.name),
		chalk.magenta(file.dir),
		join(file.dir, file.name),
	];

	loading.start(`Criando arquivo ${name} em ${dir}`);

	const { success, error } = await writeFile(path, file.content.trim());

	const message = success ? 'foi criado com sucesso' : 'falhou ao ser criado';

	loading.stop(`O arquivo ${name} ${message} em ${dir}`);

	return {
		success,
		error,
		path,
	};
}
