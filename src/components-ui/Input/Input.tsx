import classNames from 'classnames'
import {
	ChangeEvent,
	DetailedHTMLProps,
	FC,
	InputHTMLAttributes,
	ReactNode
} from 'react'

import { ELabelPosition } from '../../model/enums'

import styles from './input.module.scss'

export interface IInput
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	componentClassName?: string
	type?: InputHTMLAttributes<HTMLInputElement>['type']
	inputClassName?: string
	width?: 'full' | 'half' | 'auto'
	placeholder?: string
	name?: string
	value?: string
	checked?: boolean
	labelClassName?: string
	labelText?: string
	labelPosition?: keyof typeof ELabelPosition
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	children?: ReactNode
}

export const Input: FC<IInput> = ({
	componentClassName,
	type = 'text',
	name,
	inputClassName,
	width = 'full',
	placeholder,
	value,
	checked,
	labelClassName,
	labelText,
	labelPosition,
	onChange,
	children,
	...props
}) => {

	const componentClass = classNames(styles.component, componentClassName, {
		[styles.labelLeft]: labelPosition === 'left',
		[styles.labelRight]: labelPosition === 'right',
		[styles.labelTop]: labelPosition === 'top',
		[styles.labelBottom]: labelPosition === 'bottom',
		[styles.full]: width === 'full',
		[styles.half]: width === 'half',
		[styles.auto]: width === 'auto',
	})
	const inputClass = classNames(styles.input, inputClassName)

	return (
		<div className={componentClass}>
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
			{children}
		</div>
	)
}
