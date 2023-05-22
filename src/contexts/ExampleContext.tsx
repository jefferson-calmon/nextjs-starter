import { createContext } from 'react';

import { Example } from 'models/Example';

interface ExampleContextProps {
	children: React.ReactNode;
}

export interface ExampleContextData {
	// Context data values
	examples: Example[];
}

export const ExampleContext = createContext({} as ExampleContextData);

export const ExampleProvider = (props: ExampleContextProps): JSX.Element => {
	return (
		<ExampleContext.Provider value={{ examples: [] }}>
			{props.children}
		</ExampleContext.Provider>
	);
};
