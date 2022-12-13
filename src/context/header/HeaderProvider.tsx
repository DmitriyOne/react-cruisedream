import { FC, ReactNode } from 'react'

import { useOpen } from '../../hooks'
import { HeaderContext } from './HeaderContext'

interface IProps {
	children: ReactNode
}

export const HeaderProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle, onClose } = useOpen()
	const { isOpen: isOpenSearch, onToggle: onToggleSearch, onClose: onCloseSearch } = useOpen()

	const value = {
		isOpen,
		onToggle,
		onClose,
		isOpenSearch,
		onCloseSearch,
		onToggleSearch
	}

	return (
		<HeaderContext.Provider value={value}>
			{children}
		</HeaderContext.Provider>
	)
}
