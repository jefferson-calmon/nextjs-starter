/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import fse from 'fs-extra';

export interface WriteFileResult {
	success: boolean;
	error: any;
}

export function createFolderIfNotExists(folderPath: string) {
	if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);
}

export function checkIfFileExists(filePath: string) {
	return fs.existsSync(filePath);
}

export async function readFile(path: string) {
	return new Promise<string>((resolve) => {
		fse.readFile(
			path,
			{
				encoding: 'utf-8',
			},
			(_, data) => resolve(data),
		);
	});
}

export async function writeFile(path: string, content: string) {
	return new Promise<WriteFileResult>((resolve) => {
		fse.outputFile(path, content, (err) => {
			if (err) return resolve({ success: false, error: err });

			resolve({ success: true, error: null });
		});
	});
}
