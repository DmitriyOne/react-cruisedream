import { Dispatch, FC, SetStateAction } from 'react'
import classNames from 'classnames'
import Select from 'react-select'

import { ISelect, ISelectGroup } from '@crdr/interfaces'

import { MultiSelect } from './MultiSelect/MultiSelect'

import styles from './my-select.module.scss'

interface IProps {
	selectedOption?: ISelect[]
	setSelected?: Dispatch<SetStateAction<any>>
	selectAllOption?: ISelect
	optionsGroup?: ISelectGroup[]
	options?: ISelect[]
	classComponent?: string
	classPrefix?: string
	placeholder?: string
	isGrouped?: boolean
	defaultValue?: ISelect
	isDefaultSelectAll?: boolean
	isRequired?: boolean
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
	defaultValue,
	isDefaultSelectAll,
	selectAllOption,
	isRequired,
}) => {

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
					isDefaultSelectAll={isDefaultSelectAll}
					selectAllOption={selectAllOption!}
					isRequired={isRequired}
				/>
				:
				<Select
					id="1"
					instanceId={'1'}
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
