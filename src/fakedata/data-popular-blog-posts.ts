/* eslint-disable max-len */
import { CRUISE_ROUTES } from '../constants'
import { ICard } from '../model/interfaces'

import europeSrc from '../assets/images/region/region-europe.jpeg'
import asiaSrc from '../assets/images/region/region-asia.jpeg'
import russiaSrc from '../assets/images/region/region-russia.jpeg'

export const dataPopularBlogPosts: ICard[] = [
	{
		id: 1,
		src: europeSrc,
		alt: 'Beautiful sea breeze',
		title: 'Staff Stories: Queen Mary 2’s iconic transatlantic crossing',
		date: '07 Dec 2022',
		subtitle: 'Join ROL Cruise team member Madison as she sails aboard Cunard’s iconic ship Queen Mary 2 for an unforgettable transatlantic crossing.',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 2,
		src: asiaSrc,
		alt: 'Beautiful sea breeze',
		title: 'Staff Stories: Queen Mary 2’s iconic transatlantic crossing',
		date: '07 Dec 2022',
		subtitle: 'Join ROL Cruise team member Madison as she sails aboard Cunard’s iconic ship Queen Mary 2 for an unforgettable transatlantic crossing.',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
	{
		id: 3,
		src: russiaSrc,
		alt: 'Beautiful sea breeze',
		title: 'Staff Stories: Queen Mary 2’s iconic transatlantic crossing',
		date: '07 Dec 2022',
		subtitle: 'Join ROL Cruise team member Madison as she sails aboard Cunard’s iconic ship Queen Mary 2 for an unforgettable transatlantic crossing.',
		href: `${CRUISE_ROUTES.ACROSS_RUSSIA}`
	},
]
