import logo1Src from '../assets/images/partners/partner-celebrity.png'

import { ICruise } from '../model/interfaces'

import { IconIncludedCruise } from './cruise/data-included-icons'
import { RouteBreadcrumbsCruise } from './cruise/data-route'
import { SliderImageCruise } from './cruise/data-slider-images'

export const DataCruise: ICruise[] = [
	{
		id: 1,
		days: 8,
		datepicker: '01.03.22 - 08.03.23',
		icons: IconIncludedCruise,
		label: 'Cruisedream',
		logo: logo1Src,
		cruiseName: 'По Карибскому морю с CRUISEDREAM',
		priceFrom: '1 590 $',
		cruiseRoute: RouteBreadcrumbsCruise,
		shipName: 'Celebrity Flora',
		sliderImages: SliderImageCruise,
		isTimer: true,
		deadline: '28 Dec 2022 17:00',
		isSale: true,
		sale: 25
	},
]
