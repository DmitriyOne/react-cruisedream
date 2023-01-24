/* eslint-disable max-len */
import { IGallery } from '../../model/interfaces'

import bigRegionImgSrc from '../../assets/images/galleries/region/1.jpg'
import small1RegionImgSrc from '../../assets/images/galleries/region/2.jpg'
import small2RegionImgSrc from '../../assets/images/galleries/region/3.jpg'

import bigCountryImgSrc from '../../assets/images/galleries/country/1.jpg'
import small1CountryImgSrc from '../../assets/images/galleries/country/2.jpg'
import small2CountryImgSrc from '../../assets/images/galleries/country/3.jpg'

import bigPortImgSrc from '../../assets/images/galleries/port/1.jpg'
import small1PortImgSrc from '../../assets/images/galleries/port/2.jpg'
import small2PortImgSrc from '../../assets/images/galleries/port/3.jpg'

import bigCompanyImgSrc from '../../assets/images/galleries/company/1.jpg'
import small1CompanyImgSrc from '../../assets/images/galleries/company/2.jpg'
import small2CompanyImgSrc from '../../assets/images/galleries/company/3.jpg'

import bigShipImgSrc from '../../assets/images/galleries/ship/1.jpg'
import small1ShipImgSrc from '../../assets/images/galleries/ship/2.jpg'
import small2ShipImgSrc from '../../assets/images/galleries/ship/3.jpg'

const galleryRegion = [
	{
		id: 1,
		src: bigCountryImgSrc,
		width: 3200,
		height: 2000
	},
	{
		id: 2,
		src: small1RegionImgSrc,
		width: 3200,
		height: 2000
	},
	{
		id: 3,
		src: small2RegionImgSrc,
		width: 3200,
		height: 2000
	},
	{
		id: 4,
		src: bigCountryImgSrc,
		width: 3200,
		height: 2000
	},
	{
		id: 5,
		src: small1CountryImgSrc,
		width: 3200,
		height: 2000
	},
	{
		id: 6,
		src: small2CountryImgSrc,
		width: 3200,
		height: 2000
	},
]

const galleryCountry = [
	{
		id: 1,
		src: bigRegionImgSrc,
		width: 3200,
		height: 2000
	},
	{
		id: 2,
		src: small1CountryImgSrc,
		width: 3200,
		height: 2000
	},
	{
		id: 3,
		src: small2CountryImgSrc,
		width: 3200, height: 2000
	},
	{
		id: 4,
		src: bigPortImgSrc,
		width: 3200,
		height: 2000
	},
	{
		id: 5,
		src: small1PortImgSrc,
		width: 3200,
		height: 2000
	},
	{
		id: 6,
		src: small2PortImgSrc,
		width: 3200,
		height: 2000
	},
]

const galleryPort = [
	{ 
		id: 1,
		src: bigPortImgSrc, 
		width: 3200, 
		height: 2000 
	},
	{ 
		id: 2,
		src: small1PortImgSrc,
		 width: 3200,
		 height: 2000 
	},
	{ 
		id: 3,
		src: small2PortImgSrc,
		 width: 3200,
		 height: 2000 
	},
	{ 
		id:4,
		src: bigRegionImgSrc,
		 width: 3200,
		 height: 2000
	 },
	{ 
		id: 5,
		src: small1RegionImgSrc,
		 width: 3200,
		 height: 2000 
	},
	{ 
		id:6 ,
		src: small2RegionImgSrc,
		 width: 3200,
		 height: 2000 
	},
]

const galleryCompany = [
	{ 
		id:1 ,
		src: bigCompanyImgSrc,
		 width: 3200,
		 height: 2000 
	},
	{ 
		id: 2,
		src: small1CompanyImgSrc,
		 width: 3200,
		height: 2000
	 },
	{ 
		id: 3,
		src: small2CompanyImgSrc, 
		width: 3200, 
		height: 2000
	 },
	{ 
		id: 4,
		src: bigRegionImgSrc, 
		width: 3200,
		 height: 2000
	 },
	{ 
		id:5 ,
		src: small1RegionImgSrc,
		 width: 3200, 
		height: 2000 
	},
	{ 
		id: 6,
		src: small2RegionImgSrc, 
		width: 3200, 
		height: 2000 
	},
]

const galleryShip = [
	{ 
		id: 1,
		src: bigShipImgSrc,
		width: 3200, 
		height: 2000 
	},
	{ 
		id: 2,
		src: small1ShipImgSrc, 
		width: 3200, 
		height: 2000 
	},
	{ 
		id: 3,
		src: small2ShipImgSrc, 
		width: 3200, 
		height: 2000 
	},
	{ 
		id: 4,
		src: bigRegionImgSrc,
		 width: 3200,
		 height: 2000 
	},
	{ 
		id: 5,
		src: small1RegionImgSrc, 
		width: 3200,
		 height: 2000 
	},
	{ 
		id: 6,
		src: small2RegionImgSrc,
		 width: 3200,
		 height: 2000 
	},
]

export const dataRegionGallery: IGallery = {
	title: 'КРУИЗЫ ПО СРЕДИЗЕМНОМУ МОРЮ',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	images: galleryRegion
}

export const dataCountryGallery: IGallery = {
	title: 'КРУИЗЫ ПО ИСПАНИИ',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	images: galleryCountry,
}

export const dataPortGallery: IGallery = {
	title: 'КРУИЗЫ ИЗ РИМА',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	images: galleryPort,
}

export const dataCompanyGallery: IGallery = {
	title: 'КРУИЗНАЯ КОМПАНИЯ MSC CRUISES',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	images: galleryCompany,
}

export const dataShipGallery: IGallery = {
	title: 'КРУИЗНАЯ КОМПАНИЯ MSC CRUISES',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	images: galleryShip,
}
