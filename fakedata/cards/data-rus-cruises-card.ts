/* eslint-disable max-len */
import { ICard } from '@crdr/interfaces'

import moscowSrc from '@crdr/image/cruises/no-fly/1.jpg'
import spSrc from '@crdr/image/cruises/no-fly/2.jpg'
import sochiSrc from '@crdr/image/cruises/no-fly/3.jpg'
import kazanSrc from '@crdr/image/cruises/no-fly/4.jpg'

export const dataRussianCruisesCard: ICard[] = [
	{
		title: 'Москва',
		subtitle: 'Дубай, ОАЭ / Абу-Даби, ОАЭ / Сир Бани Яс, ОАЭ / Даммам, Саудовская Аравия / Дубай, ОАЭ /Катар Дубай, ОАЭ',
		image: { src: moscowSrc, alt: 'Moscow city' },
		href: '/port',
	},
	{
		title: 'Москва',
		subtitle: 'Барселона, Испания / Валенсия, Испания / Барселона, Испания / Рим, Италия / Валенсия / Барселона, Испания / Рим, Италия / Валенсия, Италия / Валенсия',
		image: { src: spSrc, alt: 'Санкт-Петербург' },
		href: '/port',
	},
	{
		title: 'Санкт-Петербург',
		subtitle: 'Сохна, Египет / Сафага, Египет / Акаба, Иордания / Джидда, Саудовская Аравия / Янб',
		image: { src: sochiSrc, alt: 'Moscow city' },
		href: '/port',
	},
	{
		title: 'Казань',
		subtitle: 'Дубай, ОАЭ / Абу-Даби, ОАЭ / Сир Бани Яс, ОАЭ / Даммам, Саудовская Аравия / Дубай, ОАЭ /Катар Дубай, ОАЭ',
		image: { src: kazanSrc, alt: 'Moscow city' },
		href: '/port',
	},
]
