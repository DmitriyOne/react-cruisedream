import { FC, ReactNode, useEffect, useState } from 'react'

import { optionRegionHome, optionCompanyHome } from '../../fakedata'

import { ISelect } from '../../model/interfaces'
import { useOpen } from '../../hooks'

import { SearchFiltersContext } from './SearchFiltersContext'


interface IProps {
	children: ReactNode
}

export const SearchFiltersProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle } = useOpen(false)
	const [currentRegion, setCurrentRegion] = useState<ISelect>()
	const [currentCompany, setCurrentCompany] = useState<ISelect>()

	useEffect(() => {
		const valueRegionLS = localStorage.getItem('region')
		const valueCompanyLS = localStorage.getItem('company')
		if (valueRegionLS) {
			setCurrentRegion(JSON.parse(valueRegionLS))
		}
		if (valueCompanyLS) {
			setCurrentCompany(JSON.parse(valueCompanyLS))
		}
	}, [])

	const getValueRegion = () => {
		return currentRegion ? optionRegionHome.find(c => c.value === currentRegion.value) : ''
	}

	const getValueCompany = () => {
		return currentCompany ? optionCompanyHome.find(c => c.value === currentCompany.value) : ''
	}

	const onChangeRegion = (newValue: any) => {
		localStorage.setItem('region', JSON.stringify(newValue))
		setCurrentRegion(newValue)
	}

	const onChangeCompany = (newValue: any) => {
		localStorage.setItem('company', JSON.stringify(newValue))
		setCurrentCompany(newValue)
	}

	const value = {
		isOpen,
		onToggle,
		getValueCompany,
		onChangeCompany,
		getValueRegion,
		onChangeRegion
	}

	return (
		<SearchFiltersContext.Provider value={value}>
			{children}
		</SearchFiltersContext.Provider >
	)
}
