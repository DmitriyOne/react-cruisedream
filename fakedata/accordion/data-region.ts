import { IAccordion, IAccordionBody } from '@crdr/interfaces'

const accordionDropdown1: IAccordionBody[] = [
	{ text: 'Рим' },
	{ text: 'Неаполь' },
	{ text: 'Барселона' },
	{ text: 'Марсель' },
]

const accordionDropdown2: IAccordionBody[] = [
	{ text: 'Марсель' },
	{ text: 'Неаполь' },
	{ text: 'Барселона' },
	{ text: 'Рим' },
	{ text: 'Средиземное море' },
	{ text: 'ОАЭ' },
]

export const dataRegionsOfSailingsAccordion: IAccordion[] = [
	{
		title: 'Средиземное море',
		body: accordionDropdown1,
		href: '/port',
	},
	{
		title: 'Северная Европа',
		body: accordionDropdown2,
		href: '/port',
	},
	{
		title: 'ОАЭ',
		body: accordionDropdown1,
		href: '/port',
	},
	{
		title: 'Красное море',
		body: accordionDropdown2,
		href: '/port',
	},
	{
		title: 'Карибские острова',
		body: accordionDropdown1,
		href: '/port',
	},
]
