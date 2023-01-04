import { ChangeEvent, createContext } from 'react'
import { ISelect } from '../../model/interfaces'

interface IInputDate {
	dateStart?: Date
	dateEnd?: Date
	onChangeDates: (dates: any) => void
	resetDates: () => void
}

interface IInputPrice {
	priceStart: string
	onChangePriceStart: (e: ChangeEvent<HTMLInputElement>) => void
	resetPriceStart: () => void
	priceEnd: string
	onChangePriceEnd: (e: ChangeEvent<HTMLInputElement>) => void
	resetPriceEnd: () => void
}

interface IInputAmount {
	amountStart: string
	onChangeAmountStart: (e: ChangeEvent<HTMLInputElement>) => void
	resetAmountStart: () => void
	amountEnd: string
	onChangeAmountEnd: (e: ChangeEvent<HTMLInputElement>) => void
	resetAmountEnd: () => void
}

interface IProps {
	isOpen: boolean
	onToggle: () => void
	isSelected: boolean

	region: ISelect | undefined
	onChangeRegion: (value: any) => void

	cruise: ISelect | undefined
	onChangeCruise: (value: any) => void

	port1: ISelect | undefined
	onChangePort1: (value: any) => void

	port2: ISelect | undefined
	onChangePort2: (value: any) => void

	port3: ISelect | undefined
	onChangePort3: (value: any) => void

	ship: ISelect | undefined
	onChangeShip: (value: any) => void

	typeCruise: ISelect | undefined
	onChangeTypeCruise: (value: any) => void

	amountDays: IInputAmount

	price: IInputPrice

	date: IInputDate
}

const defaultValue: IProps = {
	isOpen: false,
	onToggle: () => { },
	isSelected: false,
	
	region: { label: '', value: '', tag: '' },
	onChangeRegion: () => { },

	cruise: { label: '', value: '', tag: '' },
	onChangeCruise: () => { },

	port1: { label: '', value: '', tag: '' },
	onChangePort1: () => { },

	port2: { label: '', value: '', tag: '' },
	onChangePort2: () => { },

	port3: { label: '', value: '', tag: '' },
	onChangePort3: () => { },

	ship: { label: '', value: '', tag: '' },
	onChangeShip: () => { },


	typeCruise: { label: '', value: '', tag: '' },
	onChangeTypeCruise: () => { },

	amountDays: {
		amountStart: '',
		onChangeAmountStart: () => { },
		resetAmountStart: () => { },
		amountEnd: '',
		onChangeAmountEnd: () => { },
		resetAmountEnd: () => { }
	},

	price: {
		priceStart: '',
		onChangePriceStart: () => { },
		resetPriceStart: () => { },
		priceEnd: '',
		onChangePriceEnd: () => { },
		resetPriceEnd: () => { },
	},

	date: {
		onChangeDates: () => {},
		resetDates: () => {}
	}
}

export const SearchFiltersContext = createContext<IProps>(defaultValue)
