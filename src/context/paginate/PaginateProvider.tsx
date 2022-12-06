import {  FC, ReactNode, useState } from 'react'

import { PaginateContext } from './PaginateContext'

interface IProps {
	children: ReactNode
}

export const PaginateProvider: FC<IProps> = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(1)

	const handlerPaginate = (number: number) => {
		setCurrentPage(number)
	}

	const value = {
		currentPage,
		handlerPaginate
	}

	return (
		<PaginateContext.Provider value={value}>
			{children}
		</PaginateContext.Provider >
	)
}
