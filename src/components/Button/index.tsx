import aresui from 'aresui';

import { ButtonContainer } from './styles';

type ButtonProps = aresui.ButtonProps;

function Button(props: ButtonProps) {
	return (
		<ButtonContainer className="button">
			<aresui.Button {...props} />
		</ButtonContainer>
	);
}

export default Button;
