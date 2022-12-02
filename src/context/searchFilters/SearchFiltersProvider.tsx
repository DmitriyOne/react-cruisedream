/* eslint-disable max-len */
import { FC, ReactNode } from 'react'

import { useOpen } from '../../hooks'

import { SearchFiltersContext } from './SearchFiltersContext'

interface IProps {
	children: ReactNode
}

export const SearchFiltersProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle } = useOpen(false)

	const value = {
		isOpen,
		onToggle,
	}

	return (
		<SearchFiltersContext.Provider value={value}>
			{children}
		</SearchFiltersContext.Provider >
	)
}
