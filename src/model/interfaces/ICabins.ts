import { EDeckCode } from '../enums'

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

export interface ICabinsSwiper {
	id: number
	start: string
	end: string
	price?: number
	isPrice: boolean
	isSales: boolean
	isCall: boolean
}
