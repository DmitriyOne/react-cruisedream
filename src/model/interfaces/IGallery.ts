export interface IGalleryImage {
	src: string
}

export interface IGallery {
	title: string
	desc: string
	images: IGalleryImage[]
}
