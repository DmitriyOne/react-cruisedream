/* eslint-disable max-len */
import { Dispatch, SetStateAction, useRef } from 'react'
import Select from 'react-select'
import { ActionMeta, Options } from 'react-select'

import { ISelect } from '../../../model/interfaces'
import { CheckboxSelect } from '../../Input'

interface IProps {
	options: ISelect[]
	selected: ISelect[],
	setSelected: Dispatch<SetStateAction<any>>,
	placeholder?: string,
	hide?: boolean
	className?: string
	classNamePrefix?: string
}

export function CustomMultiSelect({...props}: IProps) {
	const valueRef = useRef(props.selected)
	valueRef.current = props.selected

	const selectAllOption = { value: '*', label: 'Все' }
	const isSelectAllSelected = () => valueRef.current.length === props.options.length
	const isOptionSelected = (option: any, selectValue: Options<any>) =>
		valueRef.current.some(({ value }) => value === option.value) ||
		isSelectAllSelected()

	const getOptions = () => [selectAllOption, ...props.options]
	const getValue = () => isSelectAllSelected() ? [selectAllOption] : props.selected

	const handleSelect = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
		const { action, option, removedValue } = actionMeta
		const opt = option as ISelect
		const removed = removedValue as ISelect
		if (action === 'select-option' && opt.value === selectAllOption.value) {
			props.setSelected(props.options)
		} else if ((action === 'deselect-option' && opt.value === selectAllOption.value) || (action === 'remove-value' && removed.value === selectAllOption.value)) {
			props.setSelected([])
		} else if (actionMeta.action === 'deselect-option' && isSelectAllSelected()) {
			props.setSelected(
				props.options.filter(({ value }) => value !== opt.value))
		} else {
			props.setSelected(newValue || [])
		}
	}

	return (
		<Select
			isOptionSelected={isOptionSelected}
			closeMenuOnSelect={false}
			defaultValue={getOptions()}
			components={{
				Option: CheckboxSelect
			}}
			value={getValue()}
			isMulti
			placeholder={props.placeholder}
			options={getOptions()}
			onChange={handleSelect}
			hideSelectedOptions={props.hide ?? false}
			instanceId={props.placeholder}
			id={props.placeholder}
			className={props.className}
			classNamePrefix={props.classNamePrefix}
		/>
	)
}
