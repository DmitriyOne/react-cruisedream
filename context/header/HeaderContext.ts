'use client'
import { createContext } from 'react'

interface IProps {
	isOpen: boolean
	onClose: () => void
	onToggle: () => void

	isOpenSearch: boolean
	onCloseSearch: () => void
	onToggleSearch: () => void
}

const defaultValue: IProps = {
	isOpen: false,
	onClose: () => { },
	onToggle: () => { },

	isOpenSearch: false,
	onCloseSearch: () => { },
	onToggleSearch: () => { },
}

export const HeaderContext = createContext<IProps>(defaultValue)
