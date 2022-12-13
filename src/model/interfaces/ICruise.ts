import { ICruiseRoute } from './ICruiseRoute'
import { IIncludedIcon } from './IIncludedIcon'

export interface ICruise {
	id: string
	label: string
	days: number
	datepicker: string
	otherDates?: string[]
	icons: IIncludedIcon[]
	logo: string
	cruiseName: string
	priceFrom: string
	cruiseRoute: ICruiseRoute[]
	shipName: string
	sliderImages: string[]
	isTimer: boolean
	deadline?: string
	isSale: boolean
	sale?: number
}
