import { FC } from 'react'
import { components, MultiValueProps, MultiValueGenericProps } from 'react-select'
import { ISelect } from '../../../model/interfaces'

import styles from './custom-value-container.module.scss'

export const CustomValueContainer: FC<MultiValueGenericProps> = ({ ...props }) => {

	const label = props.data.label
	const allSelected: any = props.selectProps.value
	const index = allSelected.findIndex((selected: ISelect) => selected.label === label)
	const isLastSelected = index === allSelected.length - 1
	const labelSuffix = isLastSelected ? ` (${allSelected.length})` : ', '
	const val = `${label}${labelSuffix}`

	console.log(isLastSelected)

	// return val

	return (
		<div className={styles.component}>
			<components.MultiValueContainer {...props}>
				{val}
			</components.MultiValueContainer>
		</div>
	)
}
