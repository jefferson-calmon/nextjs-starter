interface ContextProvidersProps {
	children: JSX.Element | React.ReactNode;
}

export function ContextProviders(props: ContextProvidersProps): JSX.Element {
	return <>{props.children}</>;
}
