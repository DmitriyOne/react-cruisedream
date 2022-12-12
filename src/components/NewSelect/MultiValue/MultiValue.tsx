import { FC, useRef, Dispatch, SetStateAction, } from 'react'
import { components, ActionMeta, Options } from 'react-select'
import makeAnimated from 'react-select/animated'

const allOption = {
	label: 'Select all',
	value: '*'
}

interface Props {
	options: Option[]
	selected: Option[],
	setSelected: Dispatch<SetStateAction<any>>,
	title: string,
	hide?: boolean
}

export type Option = {
	value: number | string;
	label: string;
};

const animate = makeAnimated()

export const MultiValue: FC<Props> = ({ ...props }) => {
	const valueRef = useRef(props.selected)
	valueRef.current = props.selected

	const selectAllOption = {
		value: '<SELECT_ALL>',
		label: 'All People'
	}

	return (
		<>
		</>
	)
}
