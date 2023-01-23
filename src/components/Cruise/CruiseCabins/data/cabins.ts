/* eslint-disable max-len */
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
import cabinsImage3Src from '../../../../assets/images/ship/new-ship.jpg'

import { ICabinsCruise, ICabinsImages } from '../../../../model/interfaces'

export const swiperImages: ICabinsImages[] = [
	{
		id: 1,
		src: cabinsImage1Src,
		alt: 'Cool cabin',
		width: 1180,
		height: 700
	},
	{
		id: 2,
		src: cabinsImage2Src,
		alt: 'Cool cabin',
		width: 1180,
		height: 700
	},
	{
		id: 3,
		src: cabinsImage3Src,
		alt: 'Cool cabin',
		width: 1180,
		height: 700
	}
]

export const cabinsInner: ICabinsCruise[] = [
	{
		id: 1,
		title: 'КАЮТА С БАЛКОНОМ С ОГРАНИЧЕННЫМ ВИДОМ',
		images: swiperImages,
		content: innerLimitCabinsDesc,
		description: 'Каюта с балконом с ограниченным видом находится на второй палубе. Имеет две уютные комнаты, оборудованные всем необходимым. Собственный балкон. Джакузи. Кровать и постельное белье.В обслуживание номера входит ежедневная влажная уборка, смена постельного белья и многое другое.'
	},
	{
		id: 2,
		title: 'КАЮТА С БАЛКОНОМ С ВИДОМ НА ПРОГУЛОЧНУЮ ПАЛУБУ',
		images: swiperImages,
		content: innerUnlimitedCabinsDesc,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae nihil in minus ducimus reprehenderit odit unde ad? Deserunt soluta non ea, ipsam suscipit ratione voluptas doloribus consequuntur sed. Laboriosam porro adipisci, provident nihil amet ratione deleniti enim excepturi repudiandae rem cumque tenetur voluptatibus facilis officia assumenda corporis magnam aliquam!'
	}
]

export const cabinsSuite: ICabinsCruise[] = [
	{
		id: 1,
		title: 'КАЮТА Сьют',
		images: swiperImages,
		content: suiteCabinsDesc,
		description: 'ПРИМЕР ТЕКСТ международный туристический холдинг, основанный в 1990 году, признанный лидер по европейским направлениям и круизам.В структуру холдинга входит туроператорская  круизной компании MSC Cruises на территории России и ряда стран. В структуру холдинга входит туроператорская  компании MSC Cruises на территории ряда стран.',
	}
]

export const cabinsBalcony: ICabinsCruise[] = [
	{
		id: 1,
		title: 'КАЮТА c балконом',
		images: swiperImages,
		content: withBalconyCabinsDesc,
		description: 'Каюта с балконом с ограниченным видом находится на второй палубе. Имеет две уютные комнаты, оборудованные всем необходимым. Собственный балкон. Джакузи. Кровать и постельное белье.В обслуживание номера входит ежедневная влажная уборка, смена постельного белья и многое другое.'
	}
]

export const cabinsWindow: ICabinsCruise[] = [
	{
		id: 1,
		title: 'КАЮТА c обычным окном',
		images: swiperImages,
		content: withSmallWindowCabinsDesc,
		description: 'ПРИМЕР ТЕКСТ международный туристический холдинг, основанный в 1990 году, признанный лидер по европейским направлениям и круизам.В структуру холдинга входит туроператорская  круизной компании MSC Cruises на территории России и ряда стран. В структуру холдинга входит туроператорская  компании MSC Cruises на территории ряда стран.',
	},
	{
		id: 2,
		title: 'КАЮТА c большим окном',
		images: swiperImages,
		content: withWindowCabinsDesc,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae nihil in minus ducimus reprehenderit odit unde ad? Deserunt soluta non ea, ipsam suscipit ratione voluptas doloribus consequuntur sed. Laboriosam porro adipisci, provident nihil amet ratione deleniti enim excepturi repudiandae rem cumque tenetur voluptatibus facilis officia assumenda corporis magnam aliquam!'
	},
	{
		id: 3,
		title: 'КАЮТА c очень большим окном',
		images: swiperImages,
		content: withBigWindowCabinsDesc,
		description: 'ПРИМЕР ТЕКСТ международный туристический холдинг, основанный в 1990 году, признанный лидер по европейским направлениям и круизам.В структуру холдинга входит туроператорская  круизной компании MSC Cruises на территории России и ряда стран. В структуру холдинга входит туроператорская  компании MSC Cruises на территории ряда стран.',
	}
]
