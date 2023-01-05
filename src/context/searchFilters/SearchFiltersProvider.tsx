/* eslint-disable max-len */
import { ChangeEvent, FC, ReactNode, useState } from 'react'

import { useOpen } from '../../hooks'

import { SearchFiltersContext } from './SearchFiltersContext'

interface IProps {
	children: ReactNode
}

export const SearchFiltersProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle } = useOpen(false)
	const today = new Date()
	const nextDay = new Date(today)
	nextDay.setDate(today.getDate() + 7)
	const [dateStart, setDateStart] = useState<Date | undefined>(today)
	const [dateEnd, setDateEnd] = useState<Date | undefined>(nextDay)
	const [amountStart, setAmountStart] = useState('')
	const [amountEnd, setAmountEnd] = useState('')
	const [priceStart, setPriceStart] = useState('')
	const [priceEnd, setPriceEnd] = useState('')

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

	const onChangeDates = (dates: any) => {
		const [start, end] = dates
		setDateStart(start)
		setDateEnd(end)
	}

	const resetDates = () => {
		setDateStart(undefined)
		setDateEnd(undefined)
	}

	const isSelect = dateStart || dateEnd || amountStart || amountEnd
	const isSelected = !!isSelect

	const date = {
		dateStart,
		dateEnd,
		onChangeDates,
		resetDates
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
		date,
		amountDays,
		price,
	}

	return (
		<SearchFiltersContext.Provider value={value}>
			{children}
		</SearchFiltersContext.Provider >
	)
}
