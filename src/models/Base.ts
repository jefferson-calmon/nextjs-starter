export interface BaseModel {
	id: string;

	createdAt: string;
	updatedAt: string;
}

export type WithoutBaseProps<T> = Omit<T, 'id' | 'updatedAt' | 'createdAt'>;
export type WithoutTimeProps<T> = Omit<T, 'updatedAt' | 'createdAt'>
