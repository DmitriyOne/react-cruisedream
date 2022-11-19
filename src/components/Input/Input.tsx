import {
	ChangeEvent,
	FC,
	InputHTMLAttributes
} from 'react'

import styles from './input.module.scss'

interface IProps {
	componentClassName?: string
	type?: InputHTMLAttributes<HTMLInputElement>['type']
	placeholder?: string
	name?: string
	value?: string
	labelText?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<IProps> = ({
	componentClassName,
	type = 'text',
	name,
	placeholder,
	value,
	labelText,
	onChange,
	...props
}) => (
	<div className={componentClassName}
	>
		<input
			type={type}
			name={name}
			className={styles.input}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			{...props}
		/>
		<label htmlFor={name} className={styles.label}>
			{labelText}
		</label>
	</div>
)
