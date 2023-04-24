import { IPartners } from '@crdr/interfaces'

import partner2Image from '@crdr/image/partners/partner-caribbean.png'
import partner1Image from '@crdr/image/partners/partner-celebrity.png'
import partner3Image from '@crdr/image/partners/partner-msc-cruises.png'

export const dataPartners: IPartners[] = [
	{
		href: '#',
		logo: { src: partner1Image, alt: 'Partner Caribbean' },
	},
	{
		href: '#',
		logo: { src: partner2Image, alt: 'Partner Celebrity' },
	},
	{
		href: '#',
		logo: { src: partner3Image, alt: 'Partner MSC Cruises' },
	},
]
