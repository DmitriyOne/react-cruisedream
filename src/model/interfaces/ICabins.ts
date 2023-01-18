import { EDeckCode } from '../enums'

export interface ICabinsImages {
	src: string
	alt: string
}

export interface IDeck {
	code: keyof typeof EDeckCode
	name: string
}

export interface ICabinsDescCruise {
	id: number
	deck: IDeck
	price: number
	checked: boolean
}

export interface ICabinsCruise {
	id: number
	title: string
	images: ICabinsImages[]
	desc: ICabinsDescCruise[]
}

export interface ICabinsShip {
	id: number
	title: string
	images: ICabinsImages
	desc: string
}

export interface ICabinsModal {
	id: number
	title: string
	images: ICabinsImages[]
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
