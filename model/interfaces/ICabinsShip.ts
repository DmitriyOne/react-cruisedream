import { ICabinsImages } from './ICabinsCruise'

export interface ICabinsAdvantages {
	title: string
}

export interface ICabinsShip {
	id: number
	title: string
	size: number
	images: ICabinsImages[]
	sortDesc: string
	fullDesc: string
	advantages: ICabinsAdvantages[]
}
