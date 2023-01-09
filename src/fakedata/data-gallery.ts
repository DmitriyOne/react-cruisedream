/* eslint-disable max-len */
import { IGallery } from '../model/interfaces'

import bigRegionImgSrc from '../assets/images/galleries/region/1.jpg'
import small1RegionImgSrc from '../assets/images/galleries/region/2.jpg'
import small2RegionImgSrc from '../assets/images/galleries/region/3.jpg'

import bigCountryImgSrc from '../assets/images/galleries/country/1.jpg'
import small1CountryImgSrc from '../assets/images/galleries/country/2.jpg'
import small2CountryImgSrc from '../assets/images/galleries/country/3.jpg'

import bigPortImgSrc from '../assets/images/galleries/port/1.jpg'
import small1PortImgSrc from '../assets/images/galleries/port/2.jpg'
import small2PortImgSrc from '../assets/images/galleries/port/3.jpg'

const galleryVisibleRegion = [
	{ src: bigRegionImgSrc },
	{ src: small1RegionImgSrc },
	{ src: small2RegionImgSrc },
]
const galleryVisibleCountry = [
	{ src: bigCountryImgSrc },
	{ src: small1CountryImgSrc },
	{ src: small2CountryImgSrc },
]
const galleryVisiblePort = [
	{ src: bigPortImgSrc },
	{ src: small1PortImgSrc },
	{ src: small2PortImgSrc },
]

const galleryHiddenRegion = [
	{ src: bigRegionImgSrc, width: 3200, height: 2000 },
	{ src: small1RegionImgSrc, width: 3200, height: 2000 },
	{ src: small2RegionImgSrc, width: 3200, height: 2000 },
	{ src: bigCountryImgSrc, width: 3200, height: 2000 },
	{ src: small1CountryImgSrc, width: 3200, height: 2000 },
	{ src: small2CountryImgSrc, width: 3200, height: 2000 },
]

export const dataRegionGallery: IGallery = {
	title: 'КРУИЗЫ ПО СРЕДИЗЕМНОМУ МОРЮ',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	galleryVisible: galleryVisibleRegion,
	galleryHidden: galleryHiddenRegion
}

export const dataCountryGallery: IGallery = {
	title: 'КРУИЗЫ ПО ИСПАНИИ',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	galleryVisible: galleryVisibleCountry,
	galleryHidden: [],
}

export const dataPortGallery: IGallery = {
	title: 'КРУИЗЫ ИЗ РИМА',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	galleryVisible: galleryVisiblePort,
	galleryHidden: [],
}
