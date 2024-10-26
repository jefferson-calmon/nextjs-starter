import { spinner } from '@clack/prompts';
import chalk from 'chalk';
import { join } from 'path';

import { exec } from '../utils/exec.ts';
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

export interface DependencyOptions {
	dependencies: string[];
	dev?: boolean;
}

export async function addDependencies({
	dependencies,
	dev = false,
}: DependencyOptions) {
	const loading = spinner();

	const depType = chalk.magenta(dev ? 'dependências de dev' : 'dependências');
	const depList = dependencies.join(' ');

	loading.start(`Instalando ${depType}: ${chalk.cyan(depList)}`);

	const { error, stderr } = await exec(
		`npm install ${dev ? '--save-dev' : '--save'} ${depList}`,
	);

	if (error) {
		loading.stop(`Falha ao instalar ${depType}`);
		console.error(stderr);
		return { success: false, error };
	}

	loading.stop(`As ${depType} foram instaladas com sucesso`);

	return { success: true, dependencies: depList };
}
