import { EPosition } from '../enums'

import { IImage } from './IImage'

export interface IArticle {
	title: string
	description: string
	image?: IImage
	video?: string
	href?: string
	position: keyof typeof EPosition
}
