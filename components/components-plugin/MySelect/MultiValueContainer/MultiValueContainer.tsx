import { useMemo } from 'react'
import { MultiValueGenericProps } from 'react-select'

import { ISelect } from '@crdr/interfaces'

export const MultiValueContainer = ({ data, selectProps }: MultiValueGenericProps) => {

	const label = data.label
	const allSelected: any = selectProps.value
	const index = allSelected.findIndex((selected: ISelect) => selected.label === label)
	const isLastSelected = index === allSelected.length - 1
	const labelSuffix = isLastSelected ? '' : ', '
	const val = useMemo(() => `${label}${labelSuffix}`, [label, labelSuffix])

	return (
		<>
			{val}
		</>
	)
}
