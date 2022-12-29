/* eslint-disable max-len */
import { ICard } from '../model/interfaces'

import italySrc from '../assets/images/countries/italy.jpg'
import greeceSrc from '../assets/images/countries/greece.jpg'
import choatiaSrc from '../assets/images/countries/choatia.jpg'

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
