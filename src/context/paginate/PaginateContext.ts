import { createContext } from 'react'

interface IProps {
	currentPage: number
	handlerPaginate: (number: number) => void
}

const defaultValue: IProps = {
	currentPage: 0,
	handlerPaginate: () => {}
}

export const PaginateContext = createContext<IProps>(defaultValue)
