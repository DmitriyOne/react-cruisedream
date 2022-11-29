import { FC, ReactNode } from 'react'

import { useOpen } from '../../hooks'
import { HeaderContext } from './HeaderContext'

interface IProps {
	children: ReactNode
}

export const HeaderProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle, onClose } = useOpen()

	return (
		<HeaderContext.Provider
			value={{
				isOpen: isOpen,
				onClose: onClose,
				onToggle: onToggle
			}}
		>
			{children}
		</HeaderContext.Provider>
	)
}
