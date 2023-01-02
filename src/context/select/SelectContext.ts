import { createContext } from 'react'

interface IProps {
	isOpenSelect: boolean
	onCloseSelect: () => void
	onToggleSelect: () => void
}

const defaultValue: IProps = {
	isOpenSelect: false,
	onCloseSelect: () => { },
	onToggleSelect: () => { },
}

export const SelectContext = createContext<IProps>(defaultValue)
