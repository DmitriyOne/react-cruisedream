import { IShip } from './IShip'

export interface IIncludedTitle {
	title: string
}

export interface IExtraTitle {
	title: string
}

export interface IIncludedIcon {
	title: string
	src: string
	alt: string
}

export interface ICruiseRoute {
	city: string
	country: string
}

export interface ICruiseOption {
	icons: IIncludedIcon[]
	included: IIncludedTitle[]
	extra: IExtraTitle[]
}

export interface ICruise {
	id: string
	label: string
	days: number
	datepicker: string
	otherDates?: string[]
	logo: string
	cruiseName: string
	priceFrom: string
	cruiseRoute: ICruiseRoute[]
	sliderImages: string[]
	isTimer: boolean
	deadline?: string
	isSale: boolean
	sale?: number
	ship: IShip
	options: ICruiseOption
}
