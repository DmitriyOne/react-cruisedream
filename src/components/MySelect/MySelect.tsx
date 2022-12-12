import classNames from 'classnames'
import { FC, useState } from 'react'
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager'

import { ISelect } from '../../model/interfaces'
import { CustomMultiSelect } from './CustomMultiSelect/CustomMultiSelect'

import styles from './my-select.module.scss'

interface IProps  extends StateManagerProps {
	options: ISelect[]
	defaultSelect?: ISelect[]
	placeholder?: string,
	hide?: boolean
	className?: string
	classNamePrefix?: string
}

export const MySelect: FC<IProps> = ({
	options, placeholder, hide, defaultSelect, className, classNamePrefix, ...props
}) => {
	const [selected, setSelected] = useState<ISelect[]>(defaultSelect || [])

	return (
		<CustomMultiSelect
			className={classNames(styles.select, className)}
			classNamePrefix={classNamePrefix}
			options={options}
			selected={selected}
			setSelected={setSelected}
			placeholder={placeholder}
			{...props}
		/>
	)
}
