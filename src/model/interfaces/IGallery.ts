export interface IGalleryImage {
	id: number
	src: string
}

export interface IGallery {
	title: string
	desc: string
	images: IGalleryImage[]
}
