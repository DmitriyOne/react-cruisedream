import { createContext } from 'react'

interface IProps {
	isOpen: boolean
	onClose: () => void
	onToggle: () => void
}

const defaultValue: IProps = {
	isOpen: false,
	onClose: () => { },
	onToggle: () => { }
}

export const HeaderContext = createContext<IProps>(defaultValue)
