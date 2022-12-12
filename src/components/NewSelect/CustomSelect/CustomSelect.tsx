import { FC } from 'react'
import Select from 'react-select'

import { ISelect } from '../../../model/interfaces'

interface IProps {
	options: ISelect[]
	value: any
	onChange: (selected: any, event?: any) => void
	allowSelectAll: boolean
	allOption: ISelect
}

export const MySelect:FC<IProps> = ({ allOption = { label: 'Select all', value: '*' }, ...props }) => {
	if (props.allowSelectAll) {
		return (
			<Select
				{...props}
				options={[allOption, ...props.options]}
				onChange={(selected, event) => {
					if (selected !== null && selected.length > 0) {
						if (selected[selected.length - 1].value === allOption.value) {
							return props.onChange([allOption, ...props.options])
						}
						let result = []
						if (selected.length === props.options.length) {
							if (selected.includes(allOption)) {
								result = selected.filter(
									(option: ISelect) => option.value !== allOption.value
								)
							} else if (event.action === 'select-option') {
								result = [allOption, ...props.options]
							}
							return props.onChange(result)
						}
					}

					return props.onChange(selected)
				}}
			/>
		)
	}

	return <Select {...props} />
}
