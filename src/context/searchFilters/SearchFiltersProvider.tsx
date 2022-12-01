import { FC, ReactNode, useState } from 'react'

import { ISelect } from '../../model/interfaces'
import { useOpen } from '../../hooks'

import { SearchFiltersContext } from './SearchFiltersContext'
import { optionCompanyHome, optionRegionHome } from '../../fakedata'

interface IProps {
	children: ReactNode
}

export const SearchFiltersProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle } = useOpen(false)
	const [currentRegion, setCurrentRegion] = useState<ISelect>()
	const [currentCompany, setCurrentCompany] = useState<ISelect>()

	if (!currentRegion) {
		const newEl = localStorage.getItem('region')
		setCurrentRegion(JSON.parse(newEl!))
		console.log(JSON.parse(newEl!))

	}

	const mySetCurrentRegion = (value: ISelect) => {
		console.log('works')
		console.log(value)

		localStorage.setItem('region', JSON.stringify(value))
		setCurrentRegion(value)
	}

	const mySetCurrentCompany = (value: ISelect) => {
		setCurrentCompany(value)
	}

	const value = {
		isOpen,
		onToggle,
		currentCompany,
		currentRegion,
		setCurrentRegion: mySetCurrentRegion,
		setCurrentCompany: mySetCurrentCompany,
	}

	return (
		<SearchFiltersContext.Provider value={value}>
			{children}
		</SearchFiltersContext.Provider >
	)
}
