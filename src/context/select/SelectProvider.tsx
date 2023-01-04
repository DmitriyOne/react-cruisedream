import { FC, ReactNode } from 'react'

import { useOpen } from '../../hooks'
import { SelectContext } from './SelectContext'

interface IProps {
	children: ReactNode
}

export const SelectProvider: FC<IProps> = ({ children }) => {
	const { isOpen: isOpenSelect, onOpen: onOpenSelect, onToggle: onToggleSelect, onClose: onCloseSelect } = useOpen()

	const value = {
		isOpenSelect,
		onOpenSelect,
		onCloseSelect,
		onToggleSelect,
	}

	return (
		<SelectContext.Provider value={value}>
			{children}
		</SelectContext.Provider>
	)
}
