import { TemplateProps } from '..';

export const Context = (
	props: TemplateProps
) => `/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from 'react';

interface ${props.itemName}ContextProps {
	children: React.ReactNode;
}

export interface ${props.itemName}ContextData {}

export const ${props.itemName}Context = createContext({} as ${props.itemName}ContextData);

export function ${props.itemName}ContextProvider(props: ${props.itemName}ContextProps) {
	return (
		<${props.itemName}Context.Provider value={{}}>{props.children}</${props.itemName}Context.Provider>
	);
}

export const use${props.itemName} = () => useContext(${props.itemName}Context);

export const with${props.itemName}Context = (Page: (...props: any) => JSX.Element) =>
	function PageWith${props.itemName}ContextProvider(...props: any) {
		return (
			<${props.itemName}ContextProvider>
				<Page {...props} />
			</${props.itemName}ContextProvider>
		);
	};
`;
