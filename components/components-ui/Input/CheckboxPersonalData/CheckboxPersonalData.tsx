import React, { ForwardedRef, forwardRef } from 'react'
import classNames from 'classnames'

import { InputError } from '../InputError/InputError'

import styles from './checkbox-personal-data.module.scss'

interface IProps {
	labelClass?: string;
	labelText: string
	errors?: any;
	name: string;
}

export const CheckboxPersonalData = forwardRef(({
	labelClass,
	labelText,
	errors,
	name,
	...props
}: IProps, ref: ForwardedRef<HTMLInputElement>
) => {
	// eslint-disable-next-line no-prototype-builtins
	const isError = errors?.hasOwnProperty(name)
	const errorMessage = errors?.[name]?.message

	return (
		<>
			<label
				className={classNames(labelClass, styles.label, {
					[styles.errorState]: isError,
				})}
			>
				<input
					ref={ref}
					className={styles.input}
					type="checkbox"
					name={name}
					{...props}
				/>
				<span className={styles.box} />
				{labelText}
			</label>
			<InputError isError={isError} errorMessage={errorMessage} componentPosition="block" />
		</>
	)
}
)
CheckboxPersonalData.displayName = 'CheckboxPersonalData'
