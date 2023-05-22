import { ExampleProvider } from './ExampleContext';

interface ContextProvidersProps {
	children: JSX.Element;
}

export function ContextProviders(props: ContextProvidersProps): JSX.Element {
	return <ExampleProvider>{props.children}</ExampleProvider>;
}
