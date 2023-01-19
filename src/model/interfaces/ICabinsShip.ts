import { ICabinsImages } from './ICabinsCruise'

export interface ICabinsListModal {
	title: string
}

export interface ICabinsModal {
	id: number
	title: string
	description: string
	advantages: ICabinsListModal[]
	gallery: ICabinsImages[]
}

export interface ICabinsShip {
	id: number
	title: string
	images: ICabinsImages
	description: string
	modal: ICabinsModal
}
