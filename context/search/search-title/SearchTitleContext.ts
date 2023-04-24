'use client'
import { createContext } from 'react'

interface ISearchTitle {
	regionTitle: string
	companyTitle: string
}

const initialValue: ISearchTitle = {
	regionTitle: '',
	companyTitle: '',
}

export const SearchTitleContext = createContext<ISearchTitle>(initialValue)
