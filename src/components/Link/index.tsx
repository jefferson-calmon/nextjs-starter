'use client';

import { useMemo } from 'react';
import { Link as NBLink, LinkProps as NBLinkProps } from 'next-bricks';

import { Route, routes } from 'config/routes';
import { cn } from 'utils/cn';
import styles from './styles.module.scss';

export interface LinkProps extends NBLinkProps {
	to?: string & Route;
}

function Link(props: LinkProps) {
	// Memo vars
	const linkTo = useMemo(() => {
		if (!props.to) return props.to;

		const route = routes.get(props.to);

		return route || props.to;
	}, [props.to]);

	return (
		<div className={cn('link', styles.link)}>
			<NBLink {...props} to={linkTo} />
		</div>
	);
}

export default Link;
