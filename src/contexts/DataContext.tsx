import { createContext, useState } from 'react';

import { Simulation } from 'models/Simulation';
import { Customer } from 'models/Customer';

interface DataContextProps {
	children: React.ReactNode;
}

interface DataContextData {
	simulation: Simulation & DataHandler<Simulation>;
	customer: Customer & DataHandler<Customer>;
    alreadyLoaded: boolean;
}

interface DataHandler<T> {
	set: (data: T) => void;
	reset: () => void;
}

export const DataContext = createContext({} as DataContextData);

export const DataProvider = ({
	children,
}: DataContextProps): JSX.Element => {
	// States
	const [simulation, setSimulation] = useState<Simulation>();
	const [customer, setCustomer] = useState<Customer>();

	// Functions
	function simulationHandler(): DataHandler<Simulation> {
		const reset = () => setSimulation(undefined);
		const set = (simulation: Simulation) => setSimulation(simulation);

		return { reset, set };
	}

	function customerHandler(): DataHandler<Customer> {
		const reset = () => setCustomer(undefined);
		const set = (customer: Customer) => setCustomer(customer);

		return { reset, set };
	}

	return (
		<DataContext.Provider
			value={{
				simulation: {
					...(simulation || ({} as Simulation)),
					...simulationHandler(),
				},
				customer: {
					...(customer || ({} as Customer)),
					...customerHandler(),
				},
                alreadyLoaded: !!simulation && !!customer,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
