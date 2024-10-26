import { NextBricksContextProvider } from './NextBricksContext';

interface ContextProvidersProps {
	children: JSX.Element | React.ReactNode;
}

export function ContextProviders(props: ContextProvidersProps): JSX.Element {
	return (
		<NextBricksContextProvider>{props.children}</NextBricksContextProvider>
	);
}
