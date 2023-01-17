import { FC } from 'react'

import { IInput, Input } from '../Input'

import styles from './checkbox-filter.module.scss'

export const CheckboxFilter: FC<IInput> = ({ ...props }) => {
	return (
		<Input
			type="checkbox"
			inputClassName={styles.input}
			labelClassName={styles.label}
			{...props}
		/>
	)
}
