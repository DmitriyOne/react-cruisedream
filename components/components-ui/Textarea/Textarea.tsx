import { DetailedHTMLProps, FC, ReactNode, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'

import { ELabelPosition } from '@crdr/enums'

import styles from './textarea.module.scss'

export interface IProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	componentClassName?: string
	width?: 'full' | 'half'
	textareaClassName?: string
	placeholder?: string
	name?: string
	value?: string
	labelClassName?: string
	labelText?: string
	labelPosition?: keyof typeof ELabelPosition
	// eslint-disable-next-line no-unused-vars
	onChange?: (e: any) => void
	children?: ReactNode
}

export const Textarea: FC<IProps> = ({
	componentClassName,
	width = 'full',
	textareaClassName,
	placeholder,
	name,
	value,
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
	})
	const textareaClass = classNames(styles.textarea, textareaClassName)
	return (
		<div className={componentClass}>
			<textarea
				id={name}
				name={name}
				className={textareaClass}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				{...props}
			/>
			<label htmlFor={name} className={classNames(styles.label, labelClassName)}>
				{labelText}
			</label>
			{children}
		</div>
	)
}
