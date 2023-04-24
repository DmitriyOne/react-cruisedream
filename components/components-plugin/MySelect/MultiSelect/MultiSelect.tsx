/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { Dispatch, FC, SetStateAction, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Select, { ActionMeta, Options } from 'react-select'

import { AlertContext } from '@crdr/context'

import { ISelect, ISelectGroup } from '@crdr/interfaces'

import { CheckboxSelect } from '@crdr/ui'

import { CustomMenuList } from '../CustomMenuList/CustomMenuList'
import { MultiValueContainer } from '../MultiValueContainer/MultiValueContainer'

interface IProps {
	classComponent?: string
	classNamePrefix?: string
	optionsGroup: ISelectGroup[]
	selectedOption: ISelect[]
	selectAllOption: ISelect
	setSelected: Dispatch<SetStateAction<any>>
	placeholder?: string
	isDefaultSelectAll?: boolean
	isRequired?: boolean
}

export const MultiSelect: FC<IProps> = ({ ...props }) => {
	const alert = useContext(AlertContext)
	const [isFocused, setIsFocused] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const [allOptions, setAllOptions] = useState<ISelect[]>([])
	const valueRef = useRef(props.selectedOption)
	valueRef.current = props.selectedOption
	const { pathname } = useRouter()

	useEffect(() => {
		const getOnlyOptions = props.optionsGroup.map(item => item.options).flat()
		setAllOptions(getOnlyOptions)
		if (props.isDefaultSelectAll) {
			props.setSelected(allOptions)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname, props.isDefaultSelectAll])

	const isSelectAllSelected = () => (valueRef.current.length === allOptions.length) && allOptions.length > 1

	const isOptionSelected = (option: any, selectValue: Options<any>) =>
		valueRef.current.some(({ value }) => value === option.value) ||
		isSelectAllSelected()

	const getOptions = () => allOptions.length > 1 ? [props.selectAllOption, ...props.optionsGroup] : [...props.optionsGroup]
	const getValue = () => isSelectAllSelected() ? [props.selectAllOption] : props.selectedOption

	const handleSelect = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
		const { action, option, removedValue } = actionMeta

		const opt = option as ISelect
		const removed = removedValue as ISelect
		if (action === 'select-option' && opt.value === props.selectAllOption.value) {
			props.setSelected(allOptions)
			// console.log('new item selected')
		}

		else if ((action === 'deselect-option' && opt.value === props.selectAllOption.value) || (action === 'remove-value' && removed.value === props.selectAllOption.value)) {
			if (props.isRequired) {
				alert.visible = true
				alert.show!('Извините, но должна быть выбрана как минимум 1 опция', 'error')
				alert.handlerTimer()
				return
			}
			props.setSelected([])
			// console.log('all items removed')
		}

		else if (actionMeta.action === 'deselect-option' && isSelectAllSelected()) {
			props.setSelected(
				allOptions.filter(option => option.value !== opt.value))
			// console.log('new item removed')
		}

		else {
			if (newValue <= 1 && props.isRequired) {
				alert.visible = true
				alert.show!('Извините, но должена быть выбрана как минимум 1 опция', 'error')
				alert.handlerTimer()
				return
			}
			props.setSelected(newValue)
			// console.log('new item added')
		}

		// console.log(action, newValue, getValue())
	}

	const memoizeMultiSelect = useMemo(() => {
		return (
			<Select
				id="1"
				instanceId={'1'}
				options={getOptions()}
				className={props.classComponent}
				classNamePrefix={props.classNamePrefix}
				placeholder={props.placeholder}
				components={{
					Option: CheckboxSelect,
					MultiValueContainer: MultiValueContainer,
					MenuList: CustomMenuList,
				}}
				value={getValue()}
				defaultValue={getOptions()}
				onChange={handleSelect}
				isOptionSelected={isOptionSelected}
				isMulti
				hideSelectedOptions={false}
				closeMenuOnSelect={false}
				blurInputOnSelect={false}
				openMenuOnFocus={isFocused}
				onMenuOpen={() => setIsFocused(true)}
				onMenuClose={() => setIsFocused(false)}
				onInputChange={(val) => setInputValue(val)}
				{...{
					menuIsOpen: isFocused || undefined,
					isFocused: isFocused || undefined,
				}}
				isClearable={false}
				isSearchable={false}
				styles={{
					input: (defaultStyles) => {
						return {
							...defaultStyles,
							position: 'absolute',
						}
					},
				}}
			/>
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props])

	return memoizeMultiSelect
}
