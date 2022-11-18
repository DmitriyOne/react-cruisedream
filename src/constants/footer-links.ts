import { CRUISE_ROUTES } from './routes'

const MainAccordion = [
	{ href: CRUISE_ROUTES.HOME, text: 'Главная 2', },
	{ href: CRUISE_ROUTES.HOME, text: 'Главная 3', },
	{ href: CRUISE_ROUTES.HOME, text: 'Главная 4', },
	{ href: CRUISE_ROUTES.HOME, text: 'Главная 5', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Контакты', }
]

const RegionAccordion = [
	{ href: CRUISE_ROUTES.HOME, text: 'Регионы 2', },
	{ href: CRUISE_ROUTES.HOME, text: 'Регионы 3', },
	{ href: CRUISE_ROUTES.HOME, text: 'Регионы 4', },
	{ href: CRUISE_ROUTES.HOME, text: 'Регионы 5', },
]

const AcrossRussiaAccordion = [
	{ href: CRUISE_ROUTES.HOME, text: 'По России 2', },
	{ href: CRUISE_ROUTES.HOME, text: 'По России 3', },
	{ href: CRUISE_ROUTES.HOME, text: 'По России 4', },
	{ href: CRUISE_ROUTES.HOME, text: 'По России 5', },
]

const ShipsAccordion = [
	{ href: CRUISE_ROUTES.HOME, text: 'Корабли 2', },
	{ href: CRUISE_ROUTES.HOME, text: 'Корабли 3', },
	{ href: CRUISE_ROUTES.HOME, text: 'Корабли 4', },
	{ href: CRUISE_ROUTES.HOME, text: 'Корабли 5', },
]

export const FooterLinks = [
	{
		title: 'Главная',
		items: MainAccordion
	},
	{
		title: 'Регионы',
		items: RegionAccordion
	},
	{
		title: 'По России',
		items: AcrossRussiaAccordion
	},
	{
		title: 'Корабли',
		items: ShipsAccordion
	},
]
