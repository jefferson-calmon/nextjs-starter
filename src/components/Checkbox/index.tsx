import {
	Checkbox as AresUICheckbox,
	CheckboxProps as AresUICheckboxProps,
    defaultPropsCheckbox
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

Checkbox.defaultProps = defaultPropsCheckbox;

export default Checkbox;
