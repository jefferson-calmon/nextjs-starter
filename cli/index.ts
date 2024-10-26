#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

import { Command } from 'commander';

import pkg from '../package.json' assert { type: 'json' };
import { create } from './commands/create.ts';
import { setup } from './commands/setup.ts';

const program = new Command();

program
	.version(pkg.version, '-v, --version', 'Exibir a versão atual do app')
	.name('app')
	.description(
		'CLI feita para automatizar tarefas repetitivas dentro do app',
	);

program.command('create <item> <name>').action(create);
program.command('setup <item>').action(setup);

program.parse(process.argv);
