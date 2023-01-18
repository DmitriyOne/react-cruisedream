import {
	innerLimitCabinsDesc,
	innerUnlimitedCabinsDesc,
	suiteCabinsDesc,
	withBalconyCabinsDesc,
	withWindowCabinsDesc,
	withSmallWindowCabinsDesc,
	withBigWindowCabinsDesc
} from './cabins-desc'

import cabinsImage1Src from '../../../../assets/images/cabins/cabins-1.jpg'
import cabinsImage2Src from '../../../../assets/images/ship/1.jpg'

import { ICabinsCruise, ICabinsImages } from '../../../../model/interfaces'

export const swiperImages: ICabinsImages[] = [
	{ src: cabinsImage1Src, alt: 'Cool cabin' },
	{ src: cabinsImage2Src, alt: 'Very cool cabin' }
]

export const cabinsInner: ICabinsCruise[] = [
	{
		id: 1,
		title: 'КАЮТА С БАЛКОНОМ С ОГРАНИЧЕННЫМ ВИДОМ',
		images: swiperImages,
		desc: innerLimitCabinsDesc,
	},
	{
		id: 2,
		title: 'КАЮТА С БАЛКОНОМ С ВИДОМ НА ПРОГУЛОЧНУЮ ПАЛУБУ',
		images: swiperImages,
		desc: innerUnlimitedCabinsDesc,
	}
]

export const cabinsSuite: ICabinsCruise[] = [
	{
		id: 1,
		title: 'КАЮТА Сьют',
		images: swiperImages,
		desc: suiteCabinsDesc,
	}
]

export const cabinsBalcony: ICabinsCruise[] = [
	{
		id: 1,
		title: 'КАЮТА c балконом',
		images: swiperImages,
		desc: withBalconyCabinsDesc,
	}
]

export const cabinsWindow: ICabinsCruise[] = [
	{
		id: 1,
		title: 'КАЮТА c обычным окном',
		images: swiperImages,
		desc: withSmallWindowCabinsDesc,
	},
	{
		id: 2,
		title: 'КАЮТА c большим окном',
		images: swiperImages,
		desc: withWindowCabinsDesc,
	},
	{
		id: 3,
		title: 'КАЮТА c очень большим окном',
		images: swiperImages,
		desc: withBigWindowCabinsDesc,
	}
]
