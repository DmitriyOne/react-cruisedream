import classNames from 'classnames'
import { FC } from 'react'
import Select from 'react-select'
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager'

import { ISelect } from '../../model/interfaces'

import styles from './my-select.module.scss'

interface IProps extends StateManagerProps {
	className?: string
	placeholder?: string
	classNamePrefix?: string
	options: ISelect[]
	// value: any
	onChange?: (value: any) => void
}

export const MySelect: FC<IProps> = ({
	className,
	placeholder,
	classNamePrefix,
	options,
	// value,
	onChange,
	...props
}) => {

	return (
		<Select
			options={options}
			placeholder={placeholder}
			className={classNames(styles.select, className)}
			classNamePrefix={classNamePrefix}
			// value={value}
			// onChange={onChange}
			{...props}
		/>
	)
}
