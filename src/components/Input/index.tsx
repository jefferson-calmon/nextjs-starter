import aresui from 'aresui';

import { InputContainer } from './styles';

type InputProps = aresui.InputProps;

function Input(props: InputProps) {
	return (
		<InputContainer className="input">
			<aresui.Input {...props} />
		</InputContainer>
	);
}

export default Input;
