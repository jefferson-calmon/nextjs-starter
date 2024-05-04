import { useMemo } from 'react';

import { Link as AresUILink, LinkProps as AresUILinkProps } from 'aresui';

import { Route, routes } from 'config/routes';

import { LinkContainer } from './styles';

interface LinkProps<K> extends AresUILinkProps {
	to: string & K;
}

function Link<K extends string = Route>(props: LinkProps<K>) {
	// Memo vars
	const to = useMemo(() => {
		if (!props.to) return props.to;

		const route = routes.get(props.to as Route);

		return route ?? props.to;
	}, [props.to]);

	return (
		<LinkContainer className="link">
			<AresUILink {...props} to={to} />
		</LinkContainer>
	);
}

export default Link;
