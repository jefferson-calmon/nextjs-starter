import {
	Button as AresUIButton,
	ButtonProps as AresUIButtonProps,
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

export default Button;
