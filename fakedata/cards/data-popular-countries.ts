/* eslint-disable max-len */
import { ICard } from '@crdr/interfaces'

import choatiaSrc from '@crdr/image/popular-country-posts/choatia.jpg'
import greeceSrc from '@crdr/image/popular-country-posts/greece.jpg'
import italySrc from '@crdr/image/popular-country-posts/italy.jpg'

export const dataPopularCountryPosts: ICard[] = [
	{
		title: 'ИТАЛИЯ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		image: { src: italySrc, alt: '' },
		href: '/port',
	},
	{
		title: 'ГРЕЦИЯ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		image: { src: greeceSrc, alt: '' },
		href: '/port',
	},
	{
		title: 'ХОРВАТИЯ',
		subtitle: 'В первоначальном значении Круиз - морское путешествие. В настоящее время понятие расширилось',
		image: { src: choatiaSrc, alt: '' },
		href: '/port',
	},
]
