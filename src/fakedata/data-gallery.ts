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

export const dataRegionGallery: IGallery = {
	title: 'КРУИЗЫ ПО СРЕДИЗЕМНОМУ МОРЮ',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	srcBig: bigRegionImgSrc,
	srcSmall1: small1RegionImgSrc,
	srcSmall2: small2RegionImgSrc
}

export const dataCountryGallery: IGallery = {
	title: 'КРУИЗЫ ПО ИСПАНИИ',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	srcBig: bigCountryImgSrc,
	srcSmall1: small1CountryImgSrc,
	srcSmall2: small2CountryImgSrc
}

export const dataPortGallery: IGallery = {
	title: 'КРУИЗЫ ИЗ РИМА',
	desc: 'From the pure white sand beaches of the Caribbean to the fascinating architecture of the Mediterranean, the natural beauty of Norway to the diverse culture of the Canary Islands, you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.',
	srcBig: bigPortImgSrc,
	srcSmall1: small1PortImgSrc,
	srcSmall2: small2PortImgSrc
}