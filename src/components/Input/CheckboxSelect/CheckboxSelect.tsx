import { FC } from 'react'

import { components, OptionProps } from 'react-select'
import { Input } from '../Input'

import styles from './checkbox-select.module.scss'

export const CheckboxSelect: FC<OptionProps> = ({ children, ...props }) => {
	return (
		<components.Option
			className={styles.component}
			{...props}>
			<span className={styles.text}>
				{children}
			</span>
			<Input
				type="checkbox"
				labelPosition="right"
				name={props.label}
				checked={props.isSelected}
				onChange={() => null}
				componentClassName={styles.inputWrapper}
				inputClassName={styles.input}
				labelClassName={styles.label}
			/>
		</components.Option>
	)
}
