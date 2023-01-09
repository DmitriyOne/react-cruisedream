interface IGalleryImage {
	src: string
}

export interface IGallery {
	title: string
	desc: string
	galleryVisible: IGalleryImage[]
	galleryHidden: IGalleryImage[]
}
