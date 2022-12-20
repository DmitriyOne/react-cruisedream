import logo1Src from '../assets/images/partners/partner-celebrity.png'
import logo2Src from '../assets/images/partners/partner-caribbean.png'

import { ICruise } from '../model/interfaces'

import { DataOtherDates1 } from './cruise/data-other-dates'
import { RouteBreadcrumbsCruise1, RouteBreadcrumbsCruise2, RouteBreadcrumbsCruise3 } from './cruise/data-route'
import { SliderImageCruise1, SliderImageCruise2 } from './cruise/data-slider-images'
import { DataShipDesc } from './cruise/data-ship-desc'
import { DataOptions, DataOptions2, DataOptions3 } from './cruise/data-options'

export const DataAllCruise: ICruise[] = [
	{
		id: '1',
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
	},
	{
		id: '2',
		days: 6,
		datepicker: '12.02.23 - 22.02.23',
		otherDates: DataOtherDates1,
		label: 'Cruisedream',
		logo: logo2Src,
		cruiseName: 'По Красному морю и Саудовской Аравии',
		priceFrom: '1 190',
		cruiseRoute: RouteBreadcrumbsCruise2,
		sliderImages: SliderImageCruise2,
		isTimer: false,
		isSale: false,
		ship: DataShipDesc,
		options: DataOptions2
	},
	{
		id: '3',
		days: 9,
		datepicker: '22.04.23 - 31.04.23',
		otherDates: DataOtherDates1,
		label: 'MSC World Europa',
		logo: logo2Src,
		cruiseName: 'По Карибскому морю с CRUISEDREAM',
		priceFrom: '1 990',
		cruiseRoute: RouteBreadcrumbsCruise3,
		sliderImages: SliderImageCruise1,
		isTimer: true,
		deadline: '20 Dec 2022 17:00',
		isSale: true,
		sale: 50,
		ship: DataShipDesc,
		options: DataOptions3
	},
	{
		id: '4',
		days: 7,
		datepicker: '01.03.23 - 08.03.23',
		otherDates: DataOtherDates1,
		label: 'Cruisedream',
		logo: logo1Src,
		cruiseName: 'По Карибскому морю с CRUISEDREAM',
		priceFrom: '1 590',
		cruiseRoute: RouteBreadcrumbsCruise1,
		sliderImages: SliderImageCruise2,
		isTimer: false,
		isSale: false,
		ship: DataShipDesc,
		options: DataOptions
	},
]
