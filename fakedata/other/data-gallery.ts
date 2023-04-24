/* eslint-disable max-len */
import { IGalleryIntro, IImage } from '@crdr/interfaces'

import img1Src from '@crdr/image/galleries/1.jpg'
import img2Src from '@crdr/image/galleries/2.jpg'
import img3Src from '@crdr/image/galleries/3.jpg'
import img4Src from '@crdr/image/galleries/4.jpg'
import img5Src from '@crdr/image/galleries/5.jpg'
import img6Src from '@crdr/image/galleries/6.jpg'

const galleryImages: IImage[] = [
	{
		src: img1Src,
		alt: '',
	},
	{
		src: img2Src,
		alt: '',
	},
	{
		src: img3Src,
		alt: '',
	},
	{
		src: img4Src,
		alt: '',
	},
	{
		src: img5Src,
		alt: '',
	},
	{
		src: img6Src,
		alt: '',
	},
]

export const dataRegionGalleryIntro: IGalleryIntro = {
	title: 'КРУИЗЫ ПО СРЕДИЗЕМНОМУ МОРЮ',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	images: galleryImages,
}

export const dataCountryGalleryIntro: IGalleryIntro = {
	title: 'КРУИЗЫ ПО ИСПАНИИ',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	images: galleryImages,
}

export const dataPortGalleryIntro: IGalleryIntro = {
	title: 'КРУИЗЫ ИЗ РИМА',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	images: galleryImages,
}

export const dataCompanyGalleryIntro: IGalleryIntro = {
	title: 'КРУИЗНАЯ КОМПАНИЯ MSC CRUISES',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	images: galleryImages,
}
