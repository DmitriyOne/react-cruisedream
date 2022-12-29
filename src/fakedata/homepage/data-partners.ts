import { CRUISE_PARTNERS } from '../../constants'

import partner1Image from '../../pages/HomePage/sections/partners/images/partner-caribbean.png'
import partner2Image from '../../pages/HomePage/sections/partners/images/partner-celebrity.png'
import partner3Image from '../../pages/HomePage/sections/partners/images/partner-msc-cruises.png'

export const dataPartners = [
	{
		id: 1,
		href: `${CRUISE_PARTNERS.partner1}`,
		src: partner1Image,
		alt: 'Partner Caribbean',
	},
	{
		id: 2,
		href: `${CRUISE_PARTNERS.partner2}`,
		src: partner2Image,
		alt: 'Partner Celebrity',
	},
	{
		id: 3,
		href: `${CRUISE_PARTNERS.partner3}`,
		src: partner3Image,
		alt: 'Partner MSC Cruises',
	},
]
