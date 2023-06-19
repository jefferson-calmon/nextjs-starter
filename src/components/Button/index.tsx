import {
	Button as AresUIButton,
	ButtonProps as AresUIButtonProps,
    defaultPropsButton
} from 'aresui';

import { ButtonContainer } from './styles';

type ButtonProps = AresUIButtonProps;

function Button(props: ButtonProps) {
	return (
		<ButtonContainer className="button">
			<AresUIButton {...props} />
		</ButtonContainer>
	);
}

Button.defaultProps = defaultPropsButton;

export default Button;
