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
	const [startDate, setStartDate] = useState<Date>()
	const [endDate, setEndDate] = useState<Date>()

	useEffect(() => {
		const valueRegionLS = localStorage.getItem('region')
		const valueCompanyLS = localStorage.getItem('company')
		const startDateLS = localStorage.getItem('start')
		const endDateLS = localStorage.getItem('end')

		if (valueRegionLS) {
			setCurrentRegion(JSON.parse(valueRegionLS))
		}
		if (valueCompanyLS) {
			setCurrentCompany(JSON.parse(valueCompanyLS))
		}
		if (startDateLS) {
			setStartDate(new Date(startDateLS))
		}
		if (endDateLS) {
			setEndDate(new Date(endDateLS))
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

	const onChangeDates = (dates: any) => {
		const [start, end] = dates
		setStartDate(start)
		setEndDate(end)
		localStorage.setItem('start', start!.toDateString())
		if (end === null) {
			return
		}
		localStorage.setItem('end', end!.toDateString())
	}

	const onChangeStartDate = (date: Date) => {
		setStartDate(date)
		localStorage.setItem('start', date!.toDateString())
	}

	const onChangeEndDate = (date: Date) => {
		setEndDate(date)
		localStorage.setItem('end', date!.toDateString())
	}


	const value = {
		isOpen,
		onToggle,
		getValueCompany,
		onChangeCompany,
		getValueRegion,
		onChangeRegion,
		startDate,
		endDate,
		onChangeDates,
		onChangeStartDate,
		onChangeEndDate
	}

	return (
		<SearchFiltersContext.Provider value={value}>
			{children}
		</SearchFiltersContext.Provider >
	)
}
