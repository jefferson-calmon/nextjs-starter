import {
	Checkbox as AresUICheckbox,
	CheckboxProps as AresUICheckboxProps,
} from 'aresui';

import { CheckboxContainer } from './styles';

type CheckboxProps = AresUICheckboxProps;

function Checkbox(props: CheckboxProps) {
	return (
		<CheckboxContainer className="checkbox">
			<AresUICheckbox {...props} />
		</CheckboxContainer>
	);
}

export default Checkbox;
