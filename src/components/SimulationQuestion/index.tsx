import { useMemo } from 'react';

import slugify from 'slugify';
import { InputRole, Input, Select } from 'idon';

import * as S from 'models/Simulation';

import { SimulationQuestionContainer } from './styles';

interface SimulationQuestionProps {
	question: S.SimulationQuestion;
	value: string;
	onChange?: (value: string) => void;
}

function SimulationQuestion({
	question,
	value,
	onChange,
}: SimulationQuestionProps) {
	// Memo vars
	const name = useMemo(
		() => slugify(question.label.toLowerCase()),
		[question.label]
	);

	// Functions
	function getInputMask(options: S.SimulationQuestion['text']) {
		if (options?.isPhoneNumber) return '+55 (99) 99999-9999';
		if (options?.isEmail) return undefined;
		if (options?.isCpf) return '999.999.999-99';
		if (options?.isBirthday) return '99/99/9999';
		if (options?.isMoney) return undefined;

		return undefined;
	}

	function getInputRole(options: S.SimulationQuestion['text']) {
		let role: InputRole = 'default';

		if (options?.isPhoneNumber) role = 'tel';
		if (options?.isEmail) role = 'email';
		if (options?.isCpf) role = 'cpfOrCnpj';
		if (options?.isBirthday) role = 'default';
		if (options?.isMoney) role = 'money';

		return role;
	}

	function handleChange(value: string) {
        console.log(value);
        // Continue from here ^^^^^^^^^^
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here
        // Continue from here

		onChange && onChange(value);
	}

	return (
		<SimulationQuestionContainer className="simulation-question">
			{question.type === 'text' && (
				<Input
					label=""
					name={name}
					value={value}
					placeholder="Digite aqui..."
					role={getInputRole(question.text)}
					mask={getInputMask(question.text)}
					onChange={(e) => handleChange(e.target.value)}
				/>
			)}

			{question.type === 'select' && (
				<Select
					label=""
					name={name}
					options={(question.select?.options || []).map((option) => ({
						value: option,
					}))}
					onChange={(value) => handleChange(value)}
				/>
			)}
		</SimulationQuestionContainer>
	);
}

export default SimulationQuestion;
