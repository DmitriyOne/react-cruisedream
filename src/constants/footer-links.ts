import { CRUISE_ROUTES } from './routes'

const MainAccordion = [
	{ href: CRUISE_ROUTES.EMPTY, text: 'Главная 2', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Главная 3', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Главная 4', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Главная 5', },
	{ href: CRUISE_ROUTES.CONTACTS, text: 'Контакты', }
]

const RegionAccordion = [
	{ href: CRUISE_ROUTES.EMPTY, text: 'Регионы 2', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Регионы 3', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Регионы 4', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Регионы 5', },
]

const AcrossRussiaAccordion = [
	{ href: CRUISE_ROUTES.EMPTY, text: 'По России 2', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'По России 3', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'По России 4', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'По России 5', },
]

const ShipsAccordion = [
	{ href: CRUISE_ROUTES.EMPTY, text: 'Корабли 2', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Корабли 3', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Корабли 4', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Корабли 5', },
]

const BlogAccordion = [
	{ href: CRUISE_ROUTES.EMPTY, text: 'Блог 2', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Блог 3', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Блог 4', },
	{ href: CRUISE_ROUTES.EMPTY, text: 'Блог 5', },
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
	{
		title: 'Блог',
		items: BlogAccordion
	},
]
