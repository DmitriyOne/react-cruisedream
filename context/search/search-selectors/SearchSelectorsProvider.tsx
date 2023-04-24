'use client'
import { ChangeEvent, FC, ReactNode, useState } from 'react'

import { useOpen } from '@crdr/hooks'

import { ISelect } from '@crdr/interfaces'

import { SearchSelectorsContext } from './SearchSelectorsContext'

interface IProps {
	children: ReactNode
}

export const SearchSelectorsProvider: FC<IProps> = ({ children }) => {
	const { isOpen, onToggle } = useOpen(false)

	const [region, setRegion] = useState<ISelect[]>([])
	const [company, setCompany] = useState<ISelect[]>([])
	const [portStart, setPortStart] = useState<ISelect[]>([])
	const [portIntermediate, setPortIntermediate] = useState<ISelect[]>([])
	const [portEnd, setPortEnd] = useState<ISelect[]>([])
	const [liner, setLiner] = useState<ISelect[]>([])
	const [typeCruise, setTypeCruise] = useState<ISelect[]>([])

	const [isRiver, setIsRiver] = useState(false)
	const [isSea, setIsSea] = useState(true)

	const [datepickerStart, setDatepickerStart] = useState<Date | null>(null)
	const [datepickerEnd, setDatepickerEnd] = useState<Date | null>(null)

	const [numberDaysStart, setNumberDaysStart] = useState('')
	const [numberDaysEnd, setNumberDaysEnd] = useState('')

	const [priceStart, setPriceStart] = useState('')
	const [priceEnd, setPriceEnd] = useState('')

	const onChangeRegion = (value: any) => {
		setRegion(value)
	}

	const onChangeCompany = (value: any) => {
		setCompany(value)
	}

	const onChangePortStart = (value: any) => {
		setPortStart(value)
	}

	const onChangePortIntermediate = (value: any) => {
		setPortIntermediate(value)
	}

	const onChangePortEnd = (value: any) => {
		setPortEnd(value)
	}

	const onChangeLiner = (value: any) => {
		setLiner(value)
	}

	const onChangeTypeCruise = (value: any) => {
		setTypeCruise(value)
	}

	const onChangeDatepicker = (value: any) => {
		if (!value) {
			setDatepickerStart(null)
			setDatepickerEnd(null)
			return
		}
		const [start, end] = value
		setDatepickerStart(start)
		setDatepickerEnd(end)
	}

	const onChangeNumberDays = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		if (e.type === 'click') {
			setNumberDaysStart('')
			setNumberDaysEnd('')
			return
		}
		if (e.target.name === 'start') {
			setNumberDaysStart(value)
		} else if (e.target.name === 'end') {
			setNumberDaysEnd(value)
		}
	}

	const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		if (e.type === 'click') {
			setPriceStart('')
			setPriceEnd('')
			return
		}
		if (e.target.name === 'start') {
			setPriceStart(value)
		} else if (e.target.name === 'end') {
			setPriceEnd(value)
		}
	}

	const isSelectedOptions = true
		?
		region.length > 0 ||
		company.length > 0 ||
		datepickerStart !== null ||
		datepickerEnd !== null
		:
		false

	const datepicker = {
		start: datepickerStart,
		end: datepickerEnd,
		onChangeDatepicker,
	}

	const numberOfdays = {
		start: numberDaysStart,
		end: numberDaysEnd,
		onChangeNumberDays,
	}

	const price = {
		start: priceStart,
		end: priceEnd,
		onChangePrice,
	}

	const port = {
		start: portStart,
		onChangePortStart,
		intermediate: portIntermediate,
		onChangePortIntermediate,
		end: portEnd,
		onChangePortEnd,
	}

	const checkboxes = {
		isRiver,
		setIsRiver,
		isSea,
		setIsSea,
	}

	const value = {
		isShowHiddenSelectors: isOpen,
		onToggleHiddenSelectors: onToggle,
		region,
		onChangeRegion,
		company,
		onChangeCompany,
		port,
		liner,
		onChangeLiner,
		typeCruise,
		onChangeTypeCruise,
		datepicker,
		numberOfdays,
		price,
		checkboxes,
		isSelectedOptions,
	}

	return (
		<SearchSelectorsContext.Provider value={value}>
			{children}
		</SearchSelectorsContext.Provider>
	)
}
