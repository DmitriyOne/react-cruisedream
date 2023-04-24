import { CRUISE_SOCIAL_LINKS } from '@crdr/constants'

import mailIcon from './icons/mail.svg'
import phoneIcon from './icons/phone.svg'
import telegramIcon from './icons/telegram.svg'
import whatsappIcon from './icons/whatsapp.svg'

export const DropdownLinks = [
	{
		href: `tel:${CRUISE_SOCIAL_LINKS.phone}`,
		icon: phoneIcon,
		alt: 'Phone Icon',
		text: '+7 499 653 89 91',
		font: 'mont',
	},
	{
		href: `${CRUISE_SOCIAL_LINKS.whatsapp}`,
		icon: whatsappIcon,
		alt: 'Whatsapp Icon',
		text: '+7 499 653 89 91',
		font: 'mont',
	},
	{
		href: `${CRUISE_SOCIAL_LINKS.telegram}`,
		icon: telegramIcon,
		alt: 'Telegram Icon',
		text: 'cruisedream_ru',
		font: 'ssp',
	},
	{
		href: `${CRUISE_SOCIAL_LINKS.mail}`,
		icon: mailIcon,
		alt: 'Mail Icon',
		text: 'cruise@cruisedream.ru',
		font: 'ssp',
	},
]
