import { FC } from 'react'

import { components, OptionProps } from 'react-select'
import { Input } from '../Input'

import styles from './checkbox-select.module.scss'

export const CheckboxSelect: FC<OptionProps> = ({ children, selectProps, ...props }) => {
	const { onMenuOpen } = selectProps

	return (
		<components.Option
			className={styles.component}
			selectProps={selectProps}
			{...props}>
			<Input
				type="checkbox"
				labelPosition="right"
				name={props.label}
				checked={props.isSelected}
				onChange={() => null}
				componentClassName={styles.inputWrapper}
				inputClassName={styles.input}
				labelClassName={styles.label}
				onClick={onMenuOpen}
			/>
			<span className={styles.text} onClick={onMenuOpen}>
				{children}
			</span>
		</components.Option>
	)
}
