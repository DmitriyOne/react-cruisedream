import { FC, ReactNode } from 'react'

import { useOpen } from '../../hooks'
import { HeaderContext } from './HeaderContext'

interface IProps {
	children: ReactNode
}

export const HeaderProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle, onClose } = useOpen()

	const value = {
		isOpen,
		onToggle,
		onClose
	}

	return (
		<HeaderContext.Provider value={value}>
			{children}
		</HeaderContext.Provider>
	)
}
