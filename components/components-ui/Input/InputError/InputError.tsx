import { FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

import { ELabelPosition } from '@crdr/enums'

import styles from './input-error.module.scss'

interface IProps {
	isError: boolean
	errorMessage: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
	componentPosition: 'absolute' | 'block'
	type?: InputHTMLAttributes<HTMLInputElement>['type']
	labelPosition?: keyof typeof ELabelPosition
}

export const InputError: FC<IProps> = ({
	isError,
	errorMessage,
	componentPosition = 'block',
	type,
	labelPosition,
}) => {

	const componentClass = classNames(styles.component, {
		[styles.absolute]: componentPosition === 'absolute',
		[styles.block]: componentPosition === 'block',
		[styles.paddingLeft]: type === 'checkbox' && labelPosition === 'right',
	})

	if (!isError) {
		return <></>
	}

	return (
		<div className={componentClass}>
			<p className={styles.text}>
				{errorMessage.toString()}
			</p>
		</div>
	)
}
