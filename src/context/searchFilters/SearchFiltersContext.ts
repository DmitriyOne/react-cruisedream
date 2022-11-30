import { createContext } from 'react'

interface IProps {
	isOpen: boolean
	onToggle: () => void
}

const defaultValue: IProps = {
	isOpen: false,
	onToggle: () => { }
}

export const SearchFiltersContext = createContext<IProps>(defaultValue)
