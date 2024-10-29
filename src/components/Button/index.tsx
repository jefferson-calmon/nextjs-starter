'use client';

import { useMemo } from 'react';

import { Button as NBButton, ButtonProps as NBButtonProps } from 'next-bricks';

import { Route, routes } from 'config/routes';
import { cn } from 'utils/cn';

import styles from './styles.module.css';

export interface ButtonProps extends NBButtonProps {
	linkTo?: Route;
}

function Button(props: ButtonProps) {
	// Memo vars
	const linkTo = useMemo(() => {
		if (!props.linkTo) return props.linkTo;

		const route = routes.get(props.linkTo);

		return route || props.linkTo;
	}, [props.linkTo]);

	return (
		<div className={cn('button', styles.button)}>
			<NBButton {...props} linkTo={linkTo} />
		</div>
	);
}

export default Button;
