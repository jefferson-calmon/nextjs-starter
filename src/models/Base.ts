export interface BaseModel {
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
