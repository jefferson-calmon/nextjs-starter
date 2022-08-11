import * as idon from 'idon';

import { ButtonContainer } from './styles';

type ButtonProps = idon.ButtonProps;

function Button(props: ButtonProps) {
	return (
		<ButtonContainer className="button">
			<idon.Button {...props} />
		</ButtonContainer>
	);
}

export default Button;
