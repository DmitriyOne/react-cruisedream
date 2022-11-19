import { CRUISE_ROUTES, CRUISE_SOCIAL_LINKS } from '../../../../../constants'

import accountIcon from '../icons/account.svg'
import subscribeIcon from '../icons/subscribe.svg'
import phoneIcon from '../../Contacts/icons/phone.svg'

export const NavbarFooterLinks = [
	{
		href: CRUISE_ROUTES.ACCOUNT,
		src: accountIcon,
		alt: 'Account Icon',
		text: 'Войти',
	},
	{
		href: CRUISE_ROUTES.SUBSCRIBE,
		src: subscribeIcon,
		alt: 'Mail Icon',
		text: 'Подписаться',
	},
	{
		href: `tel:${CRUISE_SOCIAL_LINKS.phone}`,
		src: phoneIcon,
		alt: 'Phone Icon',
		text: `${CRUISE_SOCIAL_LINKS.phone}`,
	},
]
