import { createContext } from 'react'

interface IProps {
	isOpen: boolean
	onToggle: () => void
	onChangeRegion: (value: any) => void
	getValueRegion: () => '' | {} | undefined
	onChangeCompany: (value: any) => void
	getValueCompany: () => '' | {} | undefined
	startDate?: Date
	endDate?: Date
	onChangeDates: (dates: any) => void
	onChangeStartDate: (date: Date) => void
	onChangeEndDate: (date: Date) => void
}

const defaultValue: IProps = {
	isOpen: false,
	onToggle: () => { },
	onChangeRegion: () => {},
	getValueRegion: () => '',
	onChangeCompany: () => {},
	getValueCompany: () => '',
	onChangeDates: () => {},
	onChangeStartDate: () => {},
	onChangeEndDate: () => {}
}

export const SearchFiltersContext = createContext<IProps>(defaultValue)
