import { uuid } from 'pandora-tools';

export interface Simulation {
	id: string;
	customerId: string;
	title: string;
	description: string;
	logoURL: string;
	questions: SimulationQuestion[];
	createdAt: string;
}

export interface SimulationQuestion {
	id: string;
	simulationId: string;
	label: string;
	description: string;
	type: 'text' | 'multipleChoice' | 'select';
	value?: string;

	text?: {
		isPhoneNumber?: boolean;
		isEmail?: boolean;
		isCpf?: boolean;
		isBirthday?: boolean;
		isMoney?: boolean,
	};

	select?: {
		options: string[];
	};
}

// Mocks
export const mockSimulation: Simulation = {
	id: uuid(),
	customerId: '',
	logoURL:
		'https://firebasestorage.googleapis.com/v0/b/simule-it.appspot.com/o/logo-example.jpg?alt=media&token=11a817bf-1726-4dac-96f3-a274be6a94fa',
	title: 'Simulação de analise de financiamento habitacional',
	description:
		'Este formulário busca facilitar o entendimento de credito habitacional dentro do financiamento Caixa Econômica Federal, fornecendo dados estimados de como pode a vim ser a sua Analise Real.',
	questions: [],
	createdAt: String(new Date()),
};

export const mockSimulationQuestions: SimulationQuestion[] = [
	{
		id: uuid(),
		simulationId: mockSimulation.id,
		label: 'Nome',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error officiis provident.',
		value: '',
		type: 'text',
		text: {},
	},
	{
		id: uuid(),
		simulationId: mockSimulation.id,
		label: 'Telefone',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error officiis provident.',
		value: '',
		type: 'text',
		text: {
			isPhoneNumber: true,
		},
	},
	{
		id: uuid(),
		simulationId: mockSimulation.id,
		label: 'E-mail',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error officiis provident.',
		value: '',
		type: 'text',
		text: {
			isEmail: true,
		},
	},
	{
		id: uuid(),
		simulationId: mockSimulation.id,
		label: 'CPF',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error officiis provident.',
		value: '',
		type: 'text',
		text: {
			isCpf: true,
		},
	},
	{
		id: uuid(),
		simulationId: mockSimulation.id,
		label: 'Data de nascimento',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error officiis provident.',
		value: '',
		type: 'text',
		text: {
			isBirthday: true,
		},
	},
	{
		id: uuid(),
		simulationId: mockSimulation.id,
		label: 'Selecione o tipo de aquisição',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error officiis provident.',
		value: '',
		type: 'select',

		select: {
			options: ['Imóvel novo', 'Imóvel usado'],
		},
	},
	{
		id: uuid(),
		simulationId: mockSimulation.id,
		label: 'Renda mensal familiar bruta',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error officiis provident.',
		value: '',
		type: 'text',

		text: {
			isMoney: true,
		}
	},
	{
		id: uuid(),
		simulationId: mockSimulation.id,
		label: 'Valor aproximado do imóvel',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error officiis provident.',
		value: '',
		type: 'text',

		text: {
			isMoney: true,
		}
	},
];
