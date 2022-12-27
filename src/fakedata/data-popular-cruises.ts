/* eslint-disable max-len */
import { CRUISE_ROUTES } from '../constants'
import { ICard } from '../model/interfaces'

import cruiseSrc from '../assets/images/cruise/1.jpg'

export const dataPopularCruises: ICard[] = [
	{
		id: 1,
		src: cruiseSrc,
		alt: 'Beautiful sea breeze',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
]
