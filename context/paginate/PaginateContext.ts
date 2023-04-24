/* eslint-disable no-unused-vars */
'use client'
import { createContext } from 'react'

interface IProps {
	searchCruiseCurrentPage: number
	handlerSearchPaginate: (number: number) => void

	landingCruiseCurrentPage: number
	handlerLandingPaginate: (number: number) => void

	googleSearchCurrentPage: number
	handlerGooglePaginate: (number: number) => void
}

const defaultValue: IProps = {
	searchCruiseCurrentPage: 1,
	handlerSearchPaginate: () => { },
	landingCruiseCurrentPage: 1,
	handlerLandingPaginate: () => { },
	googleSearchCurrentPage: 1,
	handlerGooglePaginate: () => { },
}

export const PaginateContext = createContext<IProps>(defaultValue)
