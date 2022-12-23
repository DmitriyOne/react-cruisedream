import { EDeckCode } from '../enums'

export interface ICabinsImages {
	src: string
	alt: string
}

export interface ICabins {
	id: number
	title: string
	images: ICabinsImages[]
	desc: ICabinsDesc[]
}

export interface IDeck {
	code: keyof typeof EDeckCode
	name: string
}

export interface ICabinsDesc {
	id: number
	deck: IDeck
	price: number
	checked: boolean
}

export interface ICabinsSwiperDates {
	id: number
	start: string
	end: string
	price?: number
	isPrice: boolean
	isSales: boolean
	isCall: boolean
}
