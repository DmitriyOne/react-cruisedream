const accordionDropdown1 = [
	{ text: 'Рим' },
	{ text: 'Неаполь' },
	{ text: 'Барселона' },
	{ text: 'Марсель' },
]

const accordionDropdown2 = [
	{ text: 'Марсель' },
	{ text: 'Неаполь' },
	{ text: 'Барселона' },
	{ text: 'Рим' },
	{ text: 'Средиземное море' },
	{ text: 'ОАЭ' },
]

export const dataRegionsAccordion = [
	{
		id: 1,
		title: 'Средиземное море',
		links: accordionDropdown1,
		href: '/port'
	},
	{
		id: 2,
		title: 'Северная Европа',
		links: accordionDropdown2,
		href: '/port'
	},
	{
		id: 3,
		title: 'ОАЭ',
		links: accordionDropdown1,
		href: '/port'
	},
	{
		id: 4,
		title: 'Красное море',
		links: accordionDropdown2,
		href: '/port'
	},
	{
		id: 5,
		title: 'Карибские острова',
		links: accordionDropdown1,
		href: '/port'
	},
]
