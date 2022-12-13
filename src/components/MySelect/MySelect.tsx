import classNames from 'classnames'
import { FC, useState } from 'react'
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager'
import Select from 'react-select'

import { CheckboxSelect } from '../Input'
import { ISelect } from '../../model/interfaces'
import { CustomMultiSelect } from './CustomMultiSelect/CustomMultiSelect'

import styles from './my-select.module.scss'

interface IProps extends StateManagerProps {
	options: ISelect[]
	defaultSelect?: ISelect[]
	placeholder?: string,
	hide?: boolean
	className?: string
	classNamePrefix?: string
	allowSelectAll?: boolean
}

export const MySelect: FC<IProps> = ({
	options, placeholder, hide, defaultSelect, className, classNamePrefix, allowSelectAll, ...props
}) => {
	const [selected, setSelected] = useState<ISelect[]>(defaultSelect || [])

	if (allowSelectAll) {
		return (
			<CustomMultiSelect
				className={classNames(styles.select, className)}
				classNamePrefix={classNamePrefix}
				options={options}
				selected={selected}
				setSelected={setSelected}
				placeholder={placeholder}
				allowSelectAll={allowSelectAll}
				{...props}
			/>
		)
	}

	return (
		<Select
			options={options}
			components={{
				Option: CheckboxSelect
			}}
			placeholder={placeholder}
			className={className}
			classNamePrefix={classNamePrefix}
			{...props}
		/>
	)
}
