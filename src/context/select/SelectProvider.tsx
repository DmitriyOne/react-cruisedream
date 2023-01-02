import { FC, ReactNode } from 'react'

import { useOpen } from '../../hooks'
import { SelectContext } from './SelectContext'

interface IProps {
	children: ReactNode
}

export const SelectProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle, onClose } = useOpen()
	
	const {
		isOpen: isOpenSelect,
		onToggle: onToggleSelect,
		onClose: onCloseSelect,
	} = useOpen()

	const value = {
		isOpenSelect,
		onToggleSelect,
		onCloseSelect,
	}

	return (
		<SelectContext.Provider value={value}>
			{children}
		</SelectContext.Provider>
	)
}
