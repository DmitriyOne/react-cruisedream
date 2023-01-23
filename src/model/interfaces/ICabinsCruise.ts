import { EDeckCode } from '../enums'

export interface ICabinsImages {
	id: number
	src: string
	alt: string
	width: number
	height: number
}

export interface IDeck {
	code: keyof typeof EDeckCode
	name: string
}

export interface ICabinsContentCruise {
	id: number
	deck: IDeck
	price: number
	checked: boolean
}

export interface ICabinsCruise {
	id: number
	title: string
	images: ICabinsImages[]
	content: ICabinsContentCruise[]
	description: string
}
