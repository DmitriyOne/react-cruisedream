import { ChangeEvent, DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import { FieldErrors } from 'react-hook-form'

import { ELabelPosition } from '@crdr/enums'

import { InputError } from './InputError/InputError'

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
	// eslint-disable-next-line no-unused-vars
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	errors?: FieldErrors
	componentPosition?: 'absolute' | 'block'
	children?: ReactNode
}

export const Input = forwardRef(({
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
	errors,
	componentPosition,
	children,
	...props
}: IInput, ref?: ForwardedRef<HTMLInputElement>
) => {
	// eslint-disable-next-line no-prototype-builtins
	const isError = name ? errors?.hasOwnProperty(name) : false
	const errorMessage = name ? errors?.[name]?.message : ''

	const componentClass = classNames(styles.component, componentClassName, {
		[styles.full]: width === 'full',
		[styles.half]: width === 'half',
		[styles.auto]: width === 'auto',
		[styles.error]: isError && componentPosition !== 'absolute',
	})
	const wrapperClass = classNames(styles.wrapper, {
		[styles.labelLeft]: labelPosition === 'left',
		[styles.labelRight]: labelPosition === 'right',
		[styles.labelTop]: labelPosition === 'top',
		[styles.labelBottom]: labelPosition === 'bottom',
	})
	const inputClass = classNames(styles.input, inputClassName)
	const labelClass = classNames(styles.label, labelClassName)

	return (
		<div className={componentClass}>
			<div className={wrapperClass}>
				<input
					ref={ref}
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
				<label htmlFor={name} className={labelClass}>
					{labelText}
				</label>
			</div>
			{children}
			<InputError
				isError={isError}
				errorMessage={errorMessage}
				componentPosition={componentPosition}
				type={type}
				labelPosition={labelPosition}
			/>
		</div>
	)
})

Input.displayName = 'Input'
