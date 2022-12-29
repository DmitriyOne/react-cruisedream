/* eslint-disable max-len */
import { CRUISE_ROUTES } from '../../constants'
import { ICard } from '../../model/interfaces'

import europeSrc from '../../components/RepeaterBlocks/RegionsCards/images/region-europe.jpeg'
import asiaSrc from '../../components/RepeaterBlocks/RegionsCards/images/region-asia.jpeg'
import russiaSrc from '../../components/RepeaterBlocks/RegionsCards/images/region-russia.jpeg'

export const dataPopularBlogPosts: ICard[] = [
	{
		id: 1,
		src: europeSrc,
		alt: 'Beautiful sea breeze',
		title: 'Staff Stories: Queen Mary 2’s iconic transatlantic crossing',
		date: '07 Dec 2022',
		subtitle: 'Join ROL Cruise team member Madison as she sails aboard Cunard’s iconic ship Queen Mary 2 for an unforgettable transatlantic crossing.',
		href: `/${CRUISE_ROUTES.EMPTY}`,
	},
	{
		id: 2,
		src: asiaSrc,
		alt: 'Beautiful sea breeze',
		title: 'Staff Stories: Queen Mary 2’s iconic transatlantic crossing',
		date: '07 Dec 2022',
		subtitle: 'Join ROL Cruise team member Madison as she sails aboard Cunard’s iconic ship Queen Mary 2 for an unforgettable transatlantic crossing.',
		href: `/${CRUISE_ROUTES.EMPTY}`,
	},
	{
		id: 3,
		src: russiaSrc,
		alt: 'Beautiful sea breeze',
		title: 'Staff Stories: Queen Mary 2’s iconic transatlantic crossing',
		date: '07 Dec 2022',
		subtitle: 'Join ROL Cruise team member Madison as she sails aboard Cunard’s iconic ship Queen Mary 2 for an unforgettable transatlantic crossing.',
		href: `/${CRUISE_ROUTES.EMPTY}`,
	},
]
