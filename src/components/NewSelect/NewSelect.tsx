import { Dispatch, SetStateAction, useRef } from 'react'
import Select from 'react-select'
import { ActionMeta, Options } from 'react-select'

import { ISelect } from '../../model/interfaces'

interface Props {
	options: ISelect[]
	selected: ISelect[],
	setSelected: Dispatch<SetStateAction<any>>,
	title: string,
	hide?: boolean
}

export function TestNewSelect(props: Props) {
	const valueRef = useRef(props.selected)
	valueRef.current = props.selected

	const selectAllOption = { value: '*', label: 'Select All' }
	const isSelectAllSelected = () => valueRef.current.length === props.options.length
	const isOptionSelected = (option: ISelect, selectValue: Options<ISelect>) =>
		valueRef.current.some(({ value }) => value === option.value) ||
		isSelectAllSelected()

	const getOptions = () => [selectAllOption, ...props.options]
	const getValue = () => isSelectAllSelected() ? [selectAllOption] : props.selected

	const handleSelect = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
		const { action, option, removedValue } = actionMeta
		// Reassigning for typing. Unknown by default
		const opt = option as ISelect
		const removed = removedValue as ISelect
		if (action === 'select-option' && opt.value === selectAllOption.value) {
			console.log('new item selected')
			props.setSelected(props.options)
		} else if ((action === 'deselect-option' && opt.value === selectAllOption.value) || (action === 'remove-value' && removed.value === selectAllOption.value)) {
			props.setSelected([])
			console.log('all items removed')
		} else if (actionMeta.action === 'deselect-option' && isSelectAllSelected()) {
			props.setSelected(
				props.options.filter(({ value }) => value !== opt.value))
			console.log('new item removed')
		} else {
			props.setSelected(newValue || [])
			console.log('new item added')
		}
		//console.log(action, newValue, getValue());
	}

	return (
		<Select
			isOptionSelected={isOptionSelected}
			closeMenuOnSelect={false}
			defaultValue={getOptions()} // Should default to select all option
			value={getValue()}
			isMulti
			placeholder={props.title}
			options={getOptions()}
			onChange={handleSelect}
			hideSelectedOptions={props.hide ?? false}
			instanceId={props.title}
			id={props.title}
		/>
	)
}
