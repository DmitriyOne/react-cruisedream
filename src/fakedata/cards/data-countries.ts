/* eslint-disable max-len */
import { ICard } from '../../model/interfaces'

import italySrc from '../../components/RepeaterBlocks/PopularCountries/images/italy.jpg'
import greeceSrc from '../../components/RepeaterBlocks/PopularCountries/images/greece.jpg'
import choatiaSrc from '../../components/RepeaterBlocks/PopularCountries/images/choatia.jpg'

export const dataCountries: ICard[] = [
	{
		id: 1,
		src: italySrc,
		alt: '',
		title: 'ИТАЛИЯ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: '/port',
	},
	{
		id: 2,
		src: greeceSrc,
		alt: '',
		title: 'ГРЕЦИЯ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: '/port',
	},
	{
		id: 3,
		src: choatiaSrc,
		alt: '',
		title: 'ХОРВАТИЯ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		href: '/port',
	},
]
