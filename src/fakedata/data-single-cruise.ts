import logo1Src from '../assets/images/partners/partner-celebrity.png'

import { ICruise } from '../model/interfaces'

import { DataOptions } from './cruise/data-options'
import { DataOtherDates1 } from './cruise/data-other-dates'
import { RouteBreadcrumbsCruise1 } from './cruise/data-route'
import { DataShipDesc } from './cruise/data-ship-desc'
import { SliderImageCruise1 } from './cruise/data-slider-images'

export const DataSingleCruise: ICruise = {
	id: '4764326',
	days: 8,
	datepicker: '01.03.23 - 08.03.23',
	otherDates: DataOtherDates1,
	label: 'Cruisedream',
	logo: logo1Src,
	cruiseName: 'Жемчужины Персидского залива',
	priceFrom: '1 590',
	cruiseRoute: RouteBreadcrumbsCruise1,
	sliderImages: SliderImageCruise1,
	isTimer: true,
	deadline: '28 Dec 2022 17:00',
	isSale: true,
	sale: 25,
	ship: DataShipDesc,
	options: DataOptions
}
