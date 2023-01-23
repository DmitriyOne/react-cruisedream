import classNames from 'classnames'
import { FC } from 'react'

import { IInput, Input } from '../Input'

import styles from './checkbox-filter.module.scss'

export const CheckboxFilter: FC<IInput> = ({ ...props }, isBgImage: string) => {

	const labelClassName = classNames(styles.label, {
		[styles.darkText]: isBgImage,
	})
	return (
		<Input
			type="checkbox"
			inputClassName={styles.input}
			labelClassName={labelClassName}
			width="auto"
			{...props}
		/>
	)
}
