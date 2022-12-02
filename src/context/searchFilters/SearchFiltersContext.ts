import { createContext } from 'react'

interface IProps {
	isOpen: boolean
	onToggle: () => void

	getValueRegion: () => '' | {} | undefined
	onChangeRegion: (value: any) => void

	getValueCompany: () => '' | {} | undefined
	onChangeCompany: (value: any) => void

	getValuePort1: () => '' | {} | undefined
	onChangePort1: (value: any) => void

	getValuePort2: () => '' | {} | undefined
	onChangePort2: (value: any) => void

	getValuePort3: () => '' | {} | undefined
	onChangePort3: (value: any) => void

	getValueShip: () => '' | {} | undefined
	onChangeShip: (value: any) => void

	getValueTypeCruise: () => '' | {} | undefined
	onChangeTypeCruise: (value: any) => void

	startDate?: Date
	endDate?: Date
	onChangeDates: (dates: any) => void
	onChangeStartDate: (date: Date) => void
	onChangeEndDate: (date: Date) => void
}

const defaultValue: IProps = {
	isOpen: false,
	onToggle: () => { },
	getValueRegion: () => '',
	onChangeRegion: () => {},

	getValueCompany: () => '',
	onChangeCompany: () => {},

	getValuePort1: () => '',
	onChangePort1: () => {},

	getValuePort2: () => '',
	onChangePort2: () => {},

	getValuePort3: () => '',
	onChangePort3: () => {},

	getValueShip: () => '',
	onChangeShip: () => {},

	getValueTypeCruise: () => '',
	onChangeTypeCruise: () => {},

	onChangeDates: () => {},
	onChangeStartDate: () => {},
	onChangeEndDate: () => {}
}

export const SearchFiltersContext = createContext<IProps>(defaultValue)
