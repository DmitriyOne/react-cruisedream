'use client'
import { createContext } from 'react'

interface ISelectedTitles {
	regionTitle: string
	companyTitle: string
	portStartTitle: string
	portIntermediateTitle: string
	portEndTitle: string
	linerTitle: string
	typeCruiseTitle: string	
}

const initialValue: ISelectedTitles = {
	regionTitle: '',
	companyTitle: '',
	portStartTitle: '',
	portIntermediateTitle: '',
	portEndTitle: '',
	linerTitle: '',
	typeCruiseTitle: '',
}

export const SearchSelectedTitlesContext = createContext<ISelectedTitles>(initialValue)
