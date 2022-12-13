import logo1Src from '../assets/images/partners/partner-celebrity.png'
import logo2Src from '../assets/images/partners/partner-caribbean.png'

import { ICruise } from '../model/interfaces'

import { IconIncludedCruise1, IconIncludedCruise2, IconIncludedCruise3 } from './cruise/data-included-icons'
import { DataOtherDates1} from './cruise/data-other-dates'
import { RouteBreadcrumbsCruise1, RouteBreadcrumbsCruise2, RouteBreadcrumbsCruise3 } from './cruise/data-route'
import { SliderImageCruise1, SliderImageCruise2 } from './cruise/data-slider-images'

export const DataAllCruise: ICruise[] = [
	{
		id: '4764326',
		days: 8,
		datepicker: '01.03.23 - 08.03.23',
		otherDates: DataOtherDates1,
		icons: IconIncludedCruise1,
		label: 'Cruisedream',
		logo: logo1Src,
		cruiseName: 'Жемчужины Персидского залива',
		priceFrom: '1 590 $',
		cruiseRoute: RouteBreadcrumbsCruise1,
		shipName: 'Celebrity Flora',
		sliderImages: SliderImageCruise1,
		isTimer: true,
		deadline: '28 Dec 2022 17:00',
		isSale: true,
		sale: 25
	},
	{
		id: '2',
		days: 6,
		datepicker: '12.02.23 - 22.02.23',
		otherDates: DataOtherDates1,
		icons: IconIncludedCruise2,
		label: 'Cruisedream',
		logo: logo2Src,
		cruiseName: 'По Красному морю и Саудовской Аравии',
		priceFrom: '1 190 $',
		cruiseRoute: RouteBreadcrumbsCruise2,
		shipName: 'MSC Splendid',
		sliderImages: SliderImageCruise2,
		isTimer: false,
		isSale: false,
	},
	{
		id: '3',
		days: 9,
		datepicker: '22.04.23 - 31.04.23',
		otherDates: DataOtherDates1,
		icons: IconIncludedCruise3,
		label: 'MSC World Europa',
		logo: logo2Src,
		cruiseName: 'По Карибскому морю с CRUISEDREAM',
		priceFrom: '1 990 $',
		cruiseRoute: RouteBreadcrumbsCruise3,
		shipName: 'Celebrity Flora',
		sliderImages: SliderImageCruise1,
		isTimer: true,
		deadline: '20 Dec 2022 17:00',
		isSale: true,
		sale: 50
	},
	{
		id: '4',
		days: 7,
		datepicker: '01.03.23 - 08.03.23',
		otherDates: DataOtherDates1,
		icons: IconIncludedCruise1,
		label: 'Cruisedream',
		logo: logo1Src,
		cruiseName: 'По Карибскому морю с CRUISEDREAM',
		priceFrom: '1 590 $',
		cruiseRoute: RouteBreadcrumbsCruise1,
		shipName: 'Celebrity Flora',
		sliderImages: SliderImageCruise2,
		isTimer: false,
		isSale: false,
	},
]
