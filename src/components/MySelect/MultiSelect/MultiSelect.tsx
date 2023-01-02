/* eslint-disable max-len */
import { Dispatch, FC, SetStateAction, useRef } from 'react'
import Select, { ActionMeta, Options } from 'react-select'

import { ISelect, ISelectGroup } from '../../../model/interfaces'
import { CheckboxSelect } from '../../Input'
import { CustomMenuOptions } from '../CustomMenuOptions/CustomMenuOptions'

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

export const MultiSelect: FC<IProps> = ({ ...props }) => {
	const valueRef = useRef(props.selectedOption)
	valueRef.current = props.selectedOption

	const selectAllOption = { value: '*', label: 'Select All' }
	const isSelectAllSelected = () => (valueRef.current.length === props.optionsGroup.length) && props.optionsGroup.length > 1
	const isOptionSelected = (option: any, selectValue: Options<any>) =>
		valueRef.current.some(({ value }) => value === option.value) ||
		isSelectAllSelected()

	const getOptions = () => props.optionsGroup.length > 1 ? [selectAllOption, ...props.optionsGroup] : [...props.optionsGroup]
	const getValue = () => isSelectAllSelected() ? [selectAllOption] : props.selectedOption

	const handleSelect = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
		const { action, option, removedValue } = actionMeta
		// Reassigning for typing. Unknown by default
		console.log(option)

		const opt = option as ISelect
		const removed = removedValue as ISelect
		if (action === 'select-option' && opt.value === selectAllOption.value) {
			// console.log('new item selected')
			props.setSelected(props.optionsGroup)
		} else if ((action === 'deselect-option' && opt.value === selectAllOption.value) || (action === 'remove-value' && removed.value === selectAllOption.value)) {
			props.setSelected([])
			// console.log('all items removed')
		} else if (actionMeta.action === 'deselect-option' && isSelectAllSelected()) {
			props.setSelected(
				props.optionsGroup.filter((options) => options.options.filter(option => option.value !== opt.value)))
			// console.log('new item removed')
		} else {
			props.setSelected(newValue || [])
			// console.log('new item added')
		}
		console.log(action, newValue, getValue())
	}
	return (
		<Select
			isOptionSelected={isOptionSelected}

			defaultValue={getOptions()} // Should default to select all option
			value={getValue()}
			isMulti
			//isSearchable
			components={{
				Option: CheckboxSelect,
				Menu: CustomMenuOptions
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
		/>
	)
}
