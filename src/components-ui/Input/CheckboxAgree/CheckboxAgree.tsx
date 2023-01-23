import { FC } from 'react'

import { IInput, Input } from '../Input'

import styles from './checkbox-agree.module.scss'

export const CheckboxAgree: FC<IInput> = ({ ...props }) => {
	return (
		<Input
			type="checkbox"
			componentClassName={styles.component}
			inputClassName={styles.input}
			labelClassName={styles.label}
			{...props}
		/>
	)
}
