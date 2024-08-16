import path from 'path';
import { z } from 'zod';

import { capitalize } from '../utils/index.ts';
import { CreateSchema } from '../commands/create.ts';
import { checkIfFileExists } from '../utils/fs.ts';
import {
	BaseModel,
	BaseModelFileName,
	Model,
} from '../templates/model/index.ts';
import { Context } from '../templates/context/index.ts';

type Item = z.infer<typeof CreateSchema>[0];

interface ItemFile {
	name: string;
	dir: string;
	content: string;
}

export function getFiles(item: Item, itemName: string) {
	itemName = normalizeItemName(itemName);

	const files: ItemFile[] = [];

	if (item === 'model') {
		const baseModelPath = path.join(
			path.dirname(''),
			'src',
			'models',
			BaseModelFileName
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
	}

	// if (item === 'component') {
	// 	files.push({
	// 		name: ['index', '.tsx'].join(''),
	// 		dir: path.join(path.dirname(''), 'src', 'components', itemName),
	// 		content: '',
	// 	});

	// 	files.push({
	// 		name: ['styles', '.ts'].join(''),
	// 		dir: path.join(path.dirname(''), 'src', 'components', itemName),
	// 		content: '',
	// 	});
	// }

	if (item === 'context') {
		files.push({
			name: [itemName, 'Context', '.tsx'].join(''),
			dir: path.join(path.dirname(''), 'src', 'contexts'),
			content: Context({ itemName }),
		});
	}

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
