import { createContext } from 'react'

interface IProps {
	isOpenSelect: boolean
	onOpenSelect: () => void
	onCloseSelect: () => void
	onToggleSelect: () => void
}

const defaultValue: IProps = {
	isOpenSelect: false,
	onOpenSelect: () => { },
	onCloseSelect: () => { },
	onToggleSelect: () => { },
}

export const SelectContext = createContext<IProps>(defaultValue)
