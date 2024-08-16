export const BaseModelFileName = 'BaseModel.ts';

export const BaseModel = () => `export interface BaseModel {
	id: string;

	createdAt: string;
	updatedAt: string;
}

export interface BaseAddress {
	state: string;
	city: string;
	postalCode: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
}

export type WithoutBaseProps<T> = Omit<T, 'id' | 'updatedAt' | 'createdAt'>;
export type WithoutTimeProps<T> = Omit<T, 'updatedAt' | 'createdAt'>;
`;

export const Model = (props: { itemName: string }) => {
	const folders = props.itemName.split('/').length - 1;

	const modelName = props.itemName.split('/').join('');
	const baseModelPath =
		folders === 0
			? './BaseModel'
			: `${Array.from({ length: folders })
					.map(() => '../')
					.join('')}BaseModel`;

	return `import { Validations } from 'codekit';

import { BaseModel, WithoutBaseProps } from '${baseModelPath}';

export interface ${modelName} extends BaseModel {

}

export const initial${modelName}: WithoutBaseProps<${modelName}> = {

}

export const validations: Validations<${modelName}> = {

}
`;
};
