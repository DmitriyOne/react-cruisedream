/* eslint-disable max-len */
import { CRUISE_ROUTES } from '../constants'
import { ICard } from '../model/interfaces'

import img1Src from '../assets/images/blog/helpful/1.jpg'
import img2Src from '../assets/images/blog/helpful/2.jpg'
import img3Src from '../assets/images/blog/helpful/3.jpg'

export const dataHelpfulBlogPosts: ICard[] = [
	{
		id: 1,
		src: img1Src,
		alt: '',
		title: 'ЛУЧШИЕ ПЛЯЖИ СРЕДИЗЕМНОГО МОРЯ',
		href: `${CRUISE_ROUTES.EMPTY}`
	},
	{
		id: 2,
		src: img2Src,
		alt: '',
		title: 'ГИД ПО ВИНОДЕЛЬНЯМ ТОСКАНЫ',
		href: `${CRUISE_ROUTES.EMPTY}`
	},
	{
		id: 3,
		src: img3Src,
		alt: '',
		title: 'ЛУЧШИЕ РЕСТОРАНЫ ИТАЛИИ',
		href: `${CRUISE_ROUTES.EMPTY}`
	}
]
