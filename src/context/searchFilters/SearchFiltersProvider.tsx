/* eslint-disable max-len */
import { FC, ReactNode, useEffect, useState } from 'react'

import { optionRegionHome, optionCompanyHome, optionPort1, optionPort2, optionPort3, optionShip, optionTypeCruise } from '../../fakedata'

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
	const [port1, setPort1] = useState<ISelect>()
	const [port2, setPort2] = useState<ISelect>()
	const [port3, setPort3] = useState<ISelect>()
	const [ship, setShip] = useState<ISelect>()
	const [typeCruise, setTypeCruise] = useState<ISelect>()


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

	const getValuePort1 = () => {
		return port1 ? optionPort1.find(p => p.value === port1.value) : ''
	}

	const getValuePort2 = () => {
		return port2 ? optionPort2.find(p => p.value === port2.value) : ''
	}

	const getValuePort3 = () => {
		return port3 ? optionPort3.find(p => p.value === port3.value) : ''
	}

	const getValueShip = () => {
		return ship ? optionShip.find(p => p.value === ship.value) : ''
	}

	const getValueTypeCruise = () => {
		return typeCruise ? optionTypeCruise.find(p => p.value === typeCruise.value) : ''
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

	const onChangePort1 = (newValue: any) => {
		setPort1(newValue)
	}

	const onChangePort2 = (newValue: any) => {
		setPort2(newValue)
	}

	const onChangePort3 = (newValue: any) => {
		setPort3(newValue)
	}

	const onChangeShip = (newValue: any) => {
		setShip(newValue)
	}

	const onChangeTypeCruise = (newValue: any) => {
		setTypeCruise(newValue)
	}

	const value = {
		isOpen,
		onToggle,

		getValueCompany,
		onChangeCompany,

		getValueRegion,
		onChangeRegion,

		getValuePort1,
		onChangePort1,

		getValuePort2,
		onChangePort2,

		getValuePort3,
		onChangePort3,

		getValueShip,
		onChangeShip,

		getValueTypeCruise,
		onChangeTypeCruise,

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
