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
}

export const MySelect: FC<IProps> = ({
	className,
	placeholder,
	classNamePrefix,
	options,
	...props
}) => {

	return (
		<Select
			options={options}
			placeholder={placeholder}
			className={classNames(styles.select, className)}
			classNamePrefix={classNamePrefix}
			{...props}
		/>
	)
}
