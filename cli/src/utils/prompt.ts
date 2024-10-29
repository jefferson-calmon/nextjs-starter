/* eslint-disable no-use-before-define */
import * as prompt from '@clack/prompts';

type Primitive = Readonly<string | boolean | number>;
type Option<Value> = Value extends Primitive
	? {
			value: Value;
			label?: string;
			hint?: string;
		}
	: {
			value: Value;
			label: string;
			hint?: string;
		};

export function error(message: string) {
	prompt.log.error(message);
	process.exit();
}

export async function select<Value extends string>(
	props: prompt.SelectOptions<Option<Value>[], Value>,
) {
	const response = await prompt.select(props);

	if (prompt.isCancel(response)) {
		prompt.cancel('Operação cancelada');
		process.exit();
	}

	return response;
}
