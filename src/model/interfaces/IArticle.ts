/* eslint-disable no-unused-vars */
interface IImage {
	src: string
	alt: string
}

enum EPosition {
	left = 'left',
	right = 'right'
}

export interface IArticle {
	id: number
	image?: IImage
	title: string
	description: string
	video?: string
	href?: string
	position: keyof typeof EPosition
}
