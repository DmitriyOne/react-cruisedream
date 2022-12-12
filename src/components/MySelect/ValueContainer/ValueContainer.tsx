import { FC } from 'react'
import { components, ValueContainerProps } from 'react-select'

export const ValueContainer: FC<ValueContainerProps> = ({ ...props }) => {

	return (
		<components.ValueContainer {...props}>
			{props.children}
		</components.ValueContainer>
	)
}
