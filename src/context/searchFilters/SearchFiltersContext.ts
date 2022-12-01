import { createContext } from 'react'
import { ISelect } from '../../model/interfaces'

interface IProps {
	isOpen: boolean
	onToggle: () => void
	currentRegion?: ISelect
	setCurrentRegion: (value: ISelect) => void
	currentCompany?: ISelect
	setCurrentCompany: (value: ISelect) => void
}

const defaultValue: IProps = {
	isOpen: false,
	onToggle: () => { },
	setCurrentRegion: () => { },
	setCurrentCompany: () => { },
}

export const SearchFiltersContext = createContext<IProps>(defaultValue)
