interface ContextProvidersProps {
	children: JSX.Element;
}

export function ContextProviders(props: ContextProvidersProps): JSX.Element {
	return <>{props.children}</>;
}
