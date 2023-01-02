import classNames from 'classnames'
import { FC, useContext, useState } from 'react'
import Select from 'react-select'
import { SelectContext } from '../../context'

import { ISelect, ISelectGroup } from '../../model/interfaces'
import { CheckboxSelect } from '../Input'
import { CustomMenuOptions } from './CustomMenuOptions/CustomMenuOptions'
import { MultiSelect } from './MultiSelect/MultiSelect'

import styles from './my-select.module.scss'

interface IProps {
	optionsGroup: ISelectGroup[]
	options?: ISelect[]
	classComponent?: string
	classPrefix?: string
	isCheckbox?: boolean
}

export const MySelect: FC<IProps> = ({
	optionsGroup,
	options,
	classComponent,
	classPrefix,
	isCheckbox = true
}) => {
	const { isOpenSelect, onToggleSelect } = useContext(SelectContext)
	const [select0, setSelected0] = useState([])

	const classNameComponent = classNames(classComponent, styles.component)
	const classNamePrefix = classNames(classPrefix, 'select-transparent')
	return (
		<>
			{isCheckbox
				?
				<MultiSelect
					classComponent={classNameComponent}
					classNamePrefix={classNamePrefix}
					optionsGroup={optionsGroup}
					selectedOption={select0}
					setSelected={setSelected0}
					isOpen={isOpenSelect}
					onToggle={onToggleSelect}
				// optionsGroup={optionsGroup}
				/>
				// <Select
				// className={classNameComponent}
				// options={optionsGroup}
				// classNamePrefix={classNamePrefix}
				// components={{
				// 	Option: CheckboxSelect,
				// 	Menu: CustomMenuOptions
				// }}
				// menuIsOpen={isOpenSelect}
				// onMenuOpen={onToggleSelect}
				// hideSelectedOptions={false}
				// closeMenuOnSelect={false}
				// isMulti
				// />
				:
				<Select
					className={classNameComponent}
					options={options}
					classNamePrefix={classNamePrefix}
				/>
			}
		</>
	)
}
