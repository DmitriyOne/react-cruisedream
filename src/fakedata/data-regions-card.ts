/* eslint-disable max-len */
import { CRUISE_ROUTES } from '../constants'
import { ICard } from '../model/interfaces'

import europeSrc from '../assets/images/region/region-europe.jpeg'
import asiaSrc from '../assets/images/region/region-asia.jpeg'
import russiaSrc from '../assets/images/region/region-russia.jpeg'

export const dataRegionsCard: ICard[] = [
	{
		id: 1,
		src: europeSrc,
		alt: 'Beautiful sea breeze',
		title: 'ЕВРОПА',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 2,
		src: asiaSrc,
		alt: 'Beautiful sea breeze',
		title: 'Азия',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 3,
		src: russiaSrc,
		alt: 'Beautiful sea breeze',
		title: 'Россия',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 4,
		src: europeSrc,
		alt: 'Beautiful sea breeze',
		title: 'ЕВРОПА',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 5,
		src: asiaSrc,
		alt: 'Beautiful sea breeze',
		title: 'Азия',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 6,
		src: russiaSrc,
		alt: 'Beautiful sea breeze',
		title: 'Россия',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	}
]
