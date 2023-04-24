import { IImage } from './IImage'

export interface ICard {
	image?: IImage
	title?: string
	subtitle?: string
	date?: string
	tags?: string
	secondaryHref?: string
	href?: string
	fleet?: string
	created?: string
	update?: string
	logo?: string
	isDiscount?: boolean
	discountPercentage?: number
}
