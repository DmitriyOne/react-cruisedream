import { FC } from 'react'
import { components, ValueContainerProps } from 'react-select'

const allOption = {
	label: 'Select all',
	value: '*'
}

export const ValueContainer: FC<ValueContainerProps> = ({ ...props }) => {
	const currentValues = props.getValue()
	console.log(currentValues)

	const toBeRendered = props.children
	if (currentValues.some((val: any) => val.value === allOption.value)) {
		// toBeRendered = [[props.children[0][0]], children![1]]
		// console.log('all')
	}

	return (
		<components.ValueContainer {...props}>
			{toBeRendered}
		</components.ValueContainer>
	)
}
