import classNames from 'classnames'
import { FC, useContext, useState } from 'react'
import Select from 'react-select'
import { SelectContext } from '../../context'

import { ISelect, ISelectGroup } from '../../model/interfaces'
import { MultiSelect, selectAllOption } from './MultiSelect/MultiSelect'

import styles from './my-select.module.scss'

interface IProps {
	optionsGroup?: ISelectGroup[]
	options?: ISelect[]
	classComponent?: string
	classPrefix?: string
	placeholder?: string
	isGrouped?: boolean
}

export const MySelect: FC<IProps> = ({
	optionsGroup,
	options,
	classComponent,
	classPrefix,
	placeholder = 'Сделайте ваш выбор',
	isGrouped = true
}) => {
	const { isOpenSelect, onOpenSelect, onCloseSelect, onToggleSelect } = useContext(SelectContext)
	const [select, setSelected] = useState<ISelect[]>([selectAllOption])

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
					selectedOption={select}
					setSelected={setSelected}
					isOpen={isOpenSelect}
					onOpen={onOpenSelect}
					onClose={onCloseSelect}
					onToggle={onToggleSelect}
				/>
				:
				<Select
					className={classNameComponent}
					options={options}
					classNamePrefix={classPrefix}
				/>
			}
		</>
	)
}
