import classNames from 'classnames'
import {
	ChangeEvent,
	DetailedHTMLProps,
	FC,
	InputHTMLAttributes
} from 'react'

import { ELabelPosition } from '../../model/enums'

import styles from './input.module.scss'

interface IProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	componentClassName?: string
	type?: InputHTMLAttributes<HTMLInputElement>['type']
	inputClassName?: string
	placeholder?: string
	name?: string
	value?: string
	checked?: boolean
	labelClassName?: string
	labelText?: string
	labelPosition?: keyof typeof ELabelPosition
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<IProps> = ({
	componentClassName,
	type = 'text',
	name,
	inputClassName,
	placeholder,
	value,
	checked,
	labelClassName,
	labelText,
	labelPosition,
	onChange,
	...props
}) => {

	const componentClass = classNames(styles.component, componentClassName, {
		[styles.labelLeft]: labelPosition === 'left',
		[styles.labelRight]: labelPosition === 'right',
		[styles.labelTop]: labelPosition === 'top',
	})
	const inputClass = classNames(styles.input, inputClassName, {
		[styles.checkbox]: type === 'checkbox',
	})
	return (
		<div className={componentClass}
		>
			<input
				id={name}
				type={type}
				name={name}
				className={inputClass}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				checked={checked}
				{...props}
			/>
			<label htmlFor={name} className={classNames(styles.label, labelClassName)}>
				{labelText}
			</label>
		</div>
	)
}
