import classNames from 'classnames'
import { FC, useContext, useState, Dispatch, SetStateAction } from 'react'
import Select from 'react-select'
import { SelectContext } from '../../context'

import { ISelect, ISelectGroup } from '../../model/interfaces'
import { MultiSelect, selectAllOption } from './MultiSelect/MultiSelect'

import styles from './my-select.module.scss'

interface IProps {
	selectedOption?: ISelect[]
	setSelected?: Dispatch<SetStateAction<any>>
	optionsGroup?: ISelectGroup[]
	options?: ISelect[]
	classComponent?: string
	classPrefix?: string
	placeholder?: string
	isGrouped?: boolean
	defaultValue?: ISelect
}

export const MySelect: FC<IProps> = ({
	selectedOption,
	setSelected,
	optionsGroup,
	options,
	classComponent,
	classPrefix,
	placeholder = 'Сделайте ваш выбор',
	isGrouped = true,
	defaultValue
}) => {
	const { isOpenSelect, onOpenSelect, onCloseSelect, onToggleSelect } = useContext(SelectContext)

	const classNameComponent = classNames(classComponent, styles.component)
	return (
		<>
			{isGrouped
				?
				<MultiSelect
					optionsGroup={optionsGroup!}
					classComponent={classNameComponent}
					classNamePrefix={classPrefix}
					placeholder={placeholder}
					selectedOption={selectedOption!}
					setSelected={setSelected!}
				/>
				:
				<Select
					className={classNameComponent}
					options={options}
					classNamePrefix={classPrefix}
					defaultValue={defaultValue}
					isSearchable={false}
				/>
			}
		</>
	)
}
