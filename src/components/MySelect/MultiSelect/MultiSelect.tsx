/* eslint-disable max-len */
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import Select, { ActionMeta, Options } from 'react-select'

import { ISelect, ISelectGroup } from '../../../model/interfaces'
import { CheckboxSelect } from '../../Input'
import { CustomMenuOptions } from '../CustomMenuOptions/CustomMenuOptions'
import { CustomValueContainer } from '../CustomValueContainer/CustomValueContainer'

interface IProps {
	classComponent?: string
	classNamePrefix?: string
	optionsGroup: ISelectGroup[]
	selectedOption: ISelect[]
	setSelected: Dispatch<SetStateAction<any>>
	placeholder?: string
	isOpen: boolean
	onToggle: () => void
}

export const selectAllOption = { value: '*', label: 'Все' }

export const MultiSelect: FC<IProps> = ({ ...props }) => {
	const [allOptions, setAllOptions] = useState<ISelect[]>([])
	const valueRef = useRef(props.selectedOption)
	valueRef.current = props.selectedOption

	useEffect(() => {
		const myOption1 = props.optionsGroup.map(v => v.options)[0]
		const myOption2 = props.optionsGroup.map(v => v.options)[1]
		const myOptionConcat = myOption1.concat(myOption2)
		setAllOptions(myOptionConcat)
		props.setSelected(myOptionConcat)
	}, [])

	
	const isSelectAllSelected = () => (valueRef.current.length === allOptions.length) && allOptions.length > 1
	const isOptionSelected = (option: any, selectValue: Options<any>) =>
		valueRef.current.some(({ value }) => value === option.value) ||
		isSelectAllSelected()

	const getOptions = () => allOptions.length > 1 ? [selectAllOption, ...props.optionsGroup] : [...props.optionsGroup]
	const getValue = () => isSelectAllSelected() ? [selectAllOption] : props.selectedOption

	const handleSelect = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
		const { action, option, removedValue } = actionMeta

		const opt = option as ISelect
		const removed = removedValue as ISelect
		if (action === 'select-option' && opt.value === selectAllOption.value) {
			// console.log('new item selected')
			props.setSelected(allOptions)
		}

		else if ((action === 'deselect-option' && opt.value === selectAllOption.value) || (action === 'remove-value' && removed.value === selectAllOption.value)) {
			props.setSelected([])
			// console.log('all items removed')
		}

		else if (actionMeta.action === 'deselect-option' && isSelectAllSelected()) {
			props.setSelected(
				allOptions.filter(option => option.value !== opt.value))
			// console.log('new item removed')
		}

		else {
			props.setSelected(newValue || [])
			// console.log('new item added')
		}
		// console.log(action, newValue, getValue())
	}
	return (
		<Select
			isOptionSelected={isOptionSelected}

			value={getValue()}
			defaultValue={getOptions()} // Should default to select all option

			isMulti
			//isSearchable
			components={{
				Option: CheckboxSelect,
				Menu: CustomMenuOptions,
				MultiValueContainer: CustomValueContainer
			}}
			placeholder={props.placeholder}
			options={getOptions()}
			onChange={handleSelect}

			className={props.classComponent}
			classNamePrefix={props.classNamePrefix}
			hideSelectedOptions={false}
			closeMenuOnSelect={false}
			menuIsOpen={props.isOpen}
			onMenuOpen={props.onToggle}

			isClearable={false}
		/>
	)
}
