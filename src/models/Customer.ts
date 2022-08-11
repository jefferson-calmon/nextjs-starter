import { uuid } from "pandora-tools";

export interface Customer {
	id: string;
    type: 'individual' | 'company';
	name: string;
	email: string;
	phone: number;
	createdAt: string;
}

// mocks
export const mockCustomer: Customer = {
	id: uuid(),
    type: 'individual',
	name: 'Redivan Almeida',
	email: 'redivan.almeida@creci.org.br',
	phone: 5575988068565,
	createdAt: String(new Date()),
};
