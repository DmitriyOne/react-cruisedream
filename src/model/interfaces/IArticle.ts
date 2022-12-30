interface IImage {
	src: string
	alt: string
}

export interface IArticle {
	id: number
	image?: IImage
	title: string
	description: string
	isVideo?: boolean
	videoSrc?: string
}
