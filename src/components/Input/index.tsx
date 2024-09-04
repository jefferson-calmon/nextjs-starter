'use client';

import { Input as NBInput, InputProps as NBInputProps } from 'next-bricks';

import { cn } from 'utils/cn';
import styles from './styles.module.scss';

export interface InputProps extends NBInputProps {}

function Input(props: InputProps) {
	return (
		<div className={cn('input', styles.input)}>
			<NBInput {...props} />
		</div>
	);
}

export default Input;
