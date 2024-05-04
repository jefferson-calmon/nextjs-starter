import { Input as AresUIInput, InputProps as AresUIInputProps } from 'aresui';

import { InputContainer } from './styles';

type InputProps = AresUIInputProps;

function Input(props: InputProps) {
	return (
		<InputContainer className="input">
			<AresUIInput {...props} />
		</InputContainer>
	);
}

export default Input;
