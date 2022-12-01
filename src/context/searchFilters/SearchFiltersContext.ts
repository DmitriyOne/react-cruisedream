import { createContext } from 'react'

interface IProps {
	isOpen: boolean
	onToggle: () => void
	onChangeRegion: (value: any) => void
	getValueRegion: () => '' | {} | undefined
	onChangeCompany: (value: any) => void
	getValueCompany: () => '' | {} | undefined
}

const defaultValue: IProps = {
	isOpen: false,
	onToggle: () => { },
	onChangeRegion: () => {},
	getValueRegion: () => '',
	onChangeCompany: () => {},
	getValueCompany: () => '',
}

export const SearchFiltersContext = createContext<IProps>(defaultValue)
