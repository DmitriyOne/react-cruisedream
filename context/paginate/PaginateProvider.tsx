'use client'
import { FC, ReactNode, useState } from 'react'

import { PaginateContext } from './PaginateContext'

interface IProps {
	children: ReactNode
}

export const PaginateProvider: FC<IProps> = ({ children }) => {
	const [searchCruiseCurrentPage, setSearchCruiseCurrentPage] = useState(1)
	const [landingCruiseCurrentPage, setSearchLandingCurrentPage] = useState(1)
	const [googleSearchCurrentPage, setGoogleSearchCurrentPage] = useState(1)

	const handlerSearchPaginate = (number: number) => {
		setSearchCruiseCurrentPage(number)
	}

	const handlerLandingPaginate = (number: number) => {
		setSearchLandingCurrentPage(number)
	}

	const handlerGooglePaginate = (number: number) => {
		setGoogleSearchCurrentPage(number)
	}

	const value = {
		searchCruiseCurrentPage,
		handlerSearchPaginate,
		landingCruiseCurrentPage,
		handlerLandingPaginate,
		googleSearchCurrentPage,
		handlerGooglePaginate,
	}

	return (
		<PaginateContext.Provider value={value}>
			{children}
		</PaginateContext.Provider >
	)
}
