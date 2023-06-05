import aresui from 'aresui';

import { CheckboxContainer } from './styles';

type CheckboxProps = aresui.CheckboxProps;

function Checkbox(props: CheckboxProps) {
	return (
		<CheckboxContainer className="checkbox">
			<aresui.Checkbox {...props} />
		</CheckboxContainer>
	);
}

export default Checkbox;
