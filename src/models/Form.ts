import { BaseModel } from './Base';

export type FieldType =
	| 'short-text'
	| 'long-text'
	| 'multiple-choice'
	| 'picture-choice'
	| 'dropdown'
	| 'statement'
	| 'rating'
	| 'opinion-scale'
	| 'yes-no'
	| 'email'
	| 'number'
	| 'website'
	| 'upload-files'
	| 'nps'
	| 'date-and-or-time';

export interface ResponseValue {
	value: string | number | boolean;
	type: FieldType;

	/**
	 * User response time in milliseconds
	 */
	time: string;
}

export interface FormField extends BaseModel {
	label: string;
	type: FieldType;
	index: number;
	properties: {
		buttonText: string;
	};
}

export interface FormTheme {
	colors: {
		primary: string;
		secondary: string;
	};
	fonts: {
		family: string;
		size: string;
	};
}

export interface FormResponse {
	[fieldId: string]: ResponseValue;
}

export interface Form extends BaseModel {
	title: string;
	description: string;
	fields: FormField[];
	responses: FormResponse;
	theme: FormTheme;
}
