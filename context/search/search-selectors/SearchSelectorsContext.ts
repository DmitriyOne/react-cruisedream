/* eslint-disable no-unused-vars */
'use client'
import { ChangeEvent, createContext, Dispatch, SetStateAction } from 'react'

import { ISelect } from '@crdr/interfaces'

interface IInputDate {
	start?: Date | null
	end?: Date | null
	onChangeDatepicker: (dates: any) => void
}

interface IInputNumberDays {
	start?: string
	end?: string
	onChangeNumberDays: (e: ChangeEvent<HTMLInputElement>) => void
}

interface IInputPrice {
	start?: string
	end?: string
	onChangePrice: (e: ChangeEvent<HTMLInputElement>) => void
}

interface ISelectorsPort {
	start: ISelect[]
	onChangePortStart: (value: any) => void
	intermediate: ISelect[]
	onChangePortIntermediate: (value: any) => void
	end: ISelect[]
	onChangePortEnd: (value: any) => void
}

interface ICheckboxes {
	isRiver: boolean
	setIsRiver: Dispatch<SetStateAction<boolean>>
	isSea: boolean
	setIsSea: Dispatch<SetStateAction<boolean>>
}

export interface ISelectContext {
	region: ISelect[]
	onChangeRegion: (value: any) => void

	company: ISelect[]
	onChangeCompany: (value: any) => void

	port: ISelectorsPort

	liner: ISelect[]
	onChangeLiner: (value: any) => void

	typeCruise: ISelect[]
	onChangeTypeCruise: (value: any) => void

	datepicker: IInputDate

	numberOfdays: IInputNumberDays

	price: IInputPrice

	checkboxes: ICheckboxes

	isShowHiddenSelectors: boolean
	onToggleHiddenSelectors: () => void

	isSelectedOptions: boolean
}

const initialValue: ISelectContext = {
	region: [],
	onChangeRegion: () => { },

	company: [],
	onChangeCompany: () => { },

	port: {
		start: [],
		onChangePortStart: () => { },
		intermediate: [],
		onChangePortIntermediate: () => { },
		end: [],
		onChangePortEnd: () => { },
	},

	liner: [],
	onChangeLiner: () => { },

	typeCruise: [],
	onChangeTypeCruise: () => { },

	datepicker: {
		onChangeDatepicker: () => { },
	},

	numberOfdays: {
		onChangeNumberDays: () => { },
	},

	price: {
		onChangePrice: () => { },
	},

	checkboxes: {
		isRiver: false,
		setIsRiver: () => { },
		isSea: true,
		setIsSea: () => { },
	},

	isShowHiddenSelectors: false,
	onToggleHiddenSelectors: () => { },

	isSelectedOptions: false,
}

export const SearchSelectorsContext = createContext<ISelectContext>(initialValue)
