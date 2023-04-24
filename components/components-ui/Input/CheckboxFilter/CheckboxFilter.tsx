import { ChangeEvent, FC } from 'react'
import classNames from 'classnames'

import { ELabelPosition } from '@crdr/enums'

import { Input } from '../Input'

import styles from './checkbox-filter.module.scss'

interface IProps {
	componentClassName?: string
	labelText: string
	labelClassName?: string
	labelPosition: keyof typeof ELabelPosition
	name: string
	isBgImage?: string
	checked: boolean
	// eslint-disable-next-line no-unused-vars
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CheckboxFilter: FC<IProps> = ({
	componentClassName,
	labelText,
	labelClassName,
	labelPosition,
	name,
	checked,
	onChange,
	isBgImage,
}) => {

	const labelClass = classNames(styles.label, labelClassName, {
		[styles.darkText]: isBgImage,
	})
	return (
		<Input
			type="checkbox"
			inputClassName={styles.input}
			labelClassName={labelClass}
			width="auto"
			componentClassName={componentClassName}
			labelText={labelText}
			labelPosition={labelPosition}
			name={name}
			checked={checked}
			onChange={onChange}

		/>
	)
}
