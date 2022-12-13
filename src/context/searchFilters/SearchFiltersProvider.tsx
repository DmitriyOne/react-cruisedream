/* eslint-disable max-len */
import { ChangeEvent, FC, ReactNode, useState } from 'react'

import { useOpen } from '../../hooks'
import { ISelect } from '../../model/interfaces'

import { SearchFiltersContext } from './SearchFiltersContext'

interface IProps {
	children: ReactNode
}

export const SearchFiltersProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle } = useOpen(false)
	const [region, setRegion] = useState<ISelect>()
	const [cruise, setCruise] = useState<ISelect>()
	const [dateStart, setDateStart] = useState<Date>()
	const [dateEnd, setDateEnd] = useState<Date>()
	const [port1, setPort1] = useState<ISelect>()
	const [port2, setPort2] = useState<ISelect>()
	const [port3, setPort3] = useState<ISelect>()
	const [ship, setShip] = useState<ISelect>()
	const [typeCruise, setTypeCruise] = useState<ISelect>()
	const [amountStart, setAmountStart] = useState('')
	const [amountEnd, setAmountEnd] = useState('')
	const [priceStart, setPriceStart] = useState('')
	const [priceEnd, setPriceEnd] = useState('')

	const onChangeRegion = (value: any) => {
		setRegion(value)
		console.log(region)
	}

	const onChangeCruise = (value: any) => {
		setCruise(value)
	}

	const onChangePort1 = (value: any) => {
		setPort1(value)
	}

	const onChangePort2 = (value: any) => {
		setPort2(value)
	}

	const onChangePort3 = (value: any) => {
		setPort3(value)
	}

	const onChangeShip = (value: any) => {
		setShip(value)
	}

	const onChangeTypeCruise = (value: any) => {
		setTypeCruise(value)
	}

	const onChangeAmountStart = (e: ChangeEvent<HTMLInputElement>) => {
		setAmountStart(e.target.value)
	}

	const onChangeAmountEnd = (e: ChangeEvent<HTMLInputElement>) => {
		setAmountEnd(e.target.value)
	}

	const resetAmountStart = () => {
		setAmountStart('')
	}

	const resetAmountEnd = () => {
		setAmountEnd('')
	}

	const onChangePriceStart = (e: ChangeEvent<HTMLInputElement>) => {
		setPriceStart(e.target.value)
	}

	const onChangePriceEnd = (e: ChangeEvent<HTMLInputElement>) => {
		setPriceEnd(e.target.value)
	}

	const resetPriceStart = () => {
		setPriceStart('')
	}

	const resetPriceEnd = () => {
		setPriceEnd('')
	}

	const onChangeDateStart = (date: Date) => {
		setDateStart(date)
	}

	const onChangeDateEnd = (date: Date) => {
		setDateEnd(date)
	}

	const resetDateStart = () => {
		setDateStart(undefined)
	}

	const resetDateEnd = () => {
		setDateEnd(undefined)
	}

	const isSelect = region || cruise || dateStart || dateEnd || port1 || port2 || port3 || ship || typeCruise || amountStart || amountEnd
	const isSelected = !!isSelect

	const date = {
		dateStart,
		onChangeDateStart,
		resetDateStart,
		dateEnd,
		onChangeDateEnd,
		resetDateEnd
	}

	const amountDays = {
		amountStart,
		onChangeAmountStart,
		resetAmountStart,
		amountEnd,
		onChangeAmountEnd,
		resetAmountEnd
	}

	const price = {
		priceStart,
		onChangePriceStart,
		resetPriceStart,
		priceEnd,
		onChangePriceEnd,
		resetPriceEnd
	}

	const value = {
		isOpen,
		onToggle,
		isSelected,
		region,
		onChangeRegion,
		cruise,
		onChangeCruise,
		port1,
		onChangePort1,
		port2,
		onChangePort2,
		port3,
		onChangePort3,
		ship,
		onChangeShip,
		typeCruise,
		onChangeTypeCruise,
		amountDays,
		price,
		date
	}

	return (
		<SearchFiltersContext.Provider value={value}>
			{children}
		</SearchFiltersContext.Provider >
	)
}
