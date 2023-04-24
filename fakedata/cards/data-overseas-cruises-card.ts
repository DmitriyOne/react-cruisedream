/* eslint-disable max-len */
import { ICard } from '@crdr/interfaces'

import dubaiSrc from '@crdr/image/cruises/international/1.jpg'
import istanbulSrc from '@crdr/image/cruises/international/2.jpg'
import kusadasiSrc from '@crdr/image/cruises/international/3.jpg'
import barcelonaSrc from '@crdr/image/cruises/international/4.jpg'

export const dataOverseasCruisesCard: ICard[] = [
	{
		title: 'Дубай',
		subtitle: 'Сохна, Египет / Сафага, Египет / Акаба, Иордания / Джидда, Саудовская Аравия / Янб',
		image: { src: dubaiSrc, alt: '' },
		href: '/port',
	},
	{
		title: 'Стамбул',
		subtitle: 'Барселона, Испания / Валенсия, Испания / Барселона, Испания / Рим, Италия / Валенсия / Барселона, Испания / Рим, Италия / Валенсия, Италия / Валенсия',
		image: { src: istanbulSrc, alt: '' },
		href: '/port',
	},
	{
		title: 'Кушадасы',
		subtitle: 'Дубай, ОАЭ / Абу-Даби, ОАЭ / Сир Бани Яс, ОАЭ / Даммам, Саудовская Аравия / Дубай, ОАЭ /Катар Дубай, ОАЭ',
		image: { src: kusadasiSrc, alt: '' },
		href: '/port',
	},
	{
		title: 'Барселона',
		subtitle: 'Барселона, Испания / Абу-Даби, ОАЭ / Сир Бани Яс, ОАЭ / Даммам, Саудовская Аравия / Дубай, ОАЭ /Катар Дубай, ОАЭ / Валенсия, Испания / Барселона, Испания',
		image: { src: barcelonaSrc, alt: '' },
		href: '/port',
	},
]
