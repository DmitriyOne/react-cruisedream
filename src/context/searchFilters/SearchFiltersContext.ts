import { ChangeEvent, createContext } from 'react'

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
	amountDays: IInputAmount
	price: IInputPrice
	date: IInputDate
}

const defaultValue: IProps = {
	isOpen: false,
	onToggle: () => { },
	isSelected: false,
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
