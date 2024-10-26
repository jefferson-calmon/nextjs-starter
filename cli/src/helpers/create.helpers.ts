/* eslint-disable @typescript-eslint/no-explicit-any */
import chalk from 'chalk';
import path from 'path';
import { z } from 'zod';

import { CreateSchema } from '../commands/create.ts';
import { Env } from '../templates/config/env.ts';
import { Context } from '../templates/context/index.ts';
import {
	BaseModel,
	BaseModelFileName,
	Model,
} from '../templates/model/index.ts';
import { checkIfFileExists, readFile } from '../utils/fs.ts';
import { capitalize } from '../utils/index.ts';
import * as prompt from '../utils/prompt.ts';
import { AppFile } from './index.ts';

type Item = z.infer<typeof CreateSchema>[0];

interface ItemFilesProps {
	itemName: string;
}

export async function getFiles(item: Item, itemName: string) {
	itemName = normalizeItemName(itemName);

	const itemFilesMap = {
		model: modelFiles,
		context: contextFiles,
		env: envFiles,
	} satisfies Record<Item, any>;

	const files = await itemFilesMap[item]({ itemName });

	return files;
}

function modelFiles({ itemName }: ItemFilesProps) {
	const files: AppFile[] = [];

	const baseModelPath = path.join(
		path.dirname(''),
		'src',
		'models',
		BaseModelFileName,
	);
	const hasBaseModel = checkIfFileExists(baseModelPath);

	if (!hasBaseModel) {
		files.push({
			name: BaseModelFileName,
			dir: path.join(path.dirname(''), 'src', 'models'),
			content: BaseModel(),
		});
	}

	files.push({
		name: [itemName, '.ts'].join(''),
		dir: path.join(path.dirname(''), 'src', 'models'),
		content: Model({ itemName }),
	});

	return files;
}

function contextFiles({ itemName }: ItemFilesProps) {
	const files: AppFile[] = [];

	files.push({
		name: [itemName, 'Context', '.tsx'].join(''),
		dir: path.join(path.dirname(''), 'src', 'contexts'),
		content: Context({ itemName }),
	});

	return files;
}

async function envFiles({ itemName }: ItemFilesProps) {
	const files: AppFile[] = [];

	const fileName = 'env.ts';
	const fileDir = path.join(path.dirname(''), 'src', 'config');
	let env = await readFile(path.join(fileDir, fileName));

	let varName = itemName.split(' ').join('_').toLocaleUpperCase();

	const type = await prompt.select<'server' | 'client'>({
		message: 'Escolha o tipo de variável:',
		options: [
			{
				label: 'Server',
				value: 'server',
				hint: 'Variáveis que serão usadas apenas no ambiente do servidor',
			},
			{
				label: 'Client',
				value: 'client',
				hint: 'Variáveis que serão expostas no ambiente do cliente',
			},
		],
	});

	if (!varName.startsWith('NEXT_PUBLIC') && type === 'client') {
		varName = 'NEXT_PUBLIC_'.concat(varName);
	}

	if (varName.startsWith('NEXT_PUBLIC') && type === 'server') {
		varName = varName.replace('NEXT_PUBLIC_', '');
	}

	if (!env) env = Env();

	if (env.includes(varName)) {
		prompt.error(
			`Variável ${chalk.cyan(varName)} já existe nas variáveis de ambiente`,
		);
	}

	const zodPattern = `${type}: {`;
	const zodInsert = `\t\t${varName.toUpperCase()}: z.string(),\n`;
	env = env.replace(zodPattern, `${zodPattern}\n${zodInsert}`);

	const runtimePattern = 'runtimeEnv: {';
	const runtimeInsert = `\t\t${varName.toUpperCase()}: process.env.${varName.toUpperCase()},\n`;
	env = env.replace(runtimePattern, `${runtimePattern}\n${runtimeInsert}`);

	files.push({
		name: ['env.ts'].join(''),
		dir: path.join(path.dirname(''), 'src', 'config'),
		content: env,
	});

	return files;
}

function normalizeItemName(name: string) {
	return name
		.split(' ')
		.map(capitalize)
		.join(' ')
		.split('/')
		.map(capitalize)
		.join('/');
}
