import { EPosition } from '../enums'

import { IImage } from './IImage'

export interface IBannerWithSlider {
	title: string
	discountPercentage: number
	href: string
	bgImage: IImage
	position: keyof typeof EPosition
}
