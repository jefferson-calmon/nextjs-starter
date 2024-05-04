import { useMemo } from 'react';

import {
	Button as AresUIButton,
	ButtonProps as AresUIButtonProps,
} from 'aresui';

import { Route, routes } from 'config/routes';

import { ButtonContainer } from './styles';

export interface ButtonProps extends AresUIButtonProps {
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
		<ButtonContainer className="button">
			<AresUIButton {...props} linkTo={linkTo} />
		</ButtonContainer>
	);
}

export default Button;
