/* eslint-disable max-len */
import { CRUISE_ROUTES } from '../constants'
import { ICard } from '../model/interfaces'

import cardEuropeImage from '../assets/images/region/region-europe.jpeg'
import cardAsiaImage from '../assets/images/region/region-asia.jpeg'
import cardRussiaImage from '../assets/images/region/region-russia.jpeg'

export const dataRegionsCard: ICard[] = [
	{
		id: 1,
		src: cardEuropeImage,
		alt: 'Beautiful sea breeze',
		title: 'ЕВРОПА',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 2,
		src: cardAsiaImage,
		alt: 'Beautiful sea breeze',
		title: 'Азия',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 3,
		src: cardRussiaImage,
		alt: 'Beautiful sea breeze',
		title: 'Россия',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 4,
		src: cardEuropeImage,
		alt: 'Beautiful sea breeze',
		title: 'ЕВРОПА',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 5,
		src: cardAsiaImage,
		alt: 'Beautiful sea breeze',
		title: 'Азия',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 6,
		src: cardRussiaImage,
		alt: 'Beautiful sea breeze',
		title: 'Россия',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	}
]
