/* eslint-disable max-len */
import { ICard } from '../model/interfaces'

import moscowSrc from '../assets/images/no-fly/1.jpg'
import spSrc from '../assets/images/no-fly/2.jpg'
import sochiSrc from '../assets/images/no-fly/3.jpg'
import kazanSrc from '../assets/images/no-fly/4.jpg'

export const dataWithoutFlyCard: ICard[] = [
	{
		id: 1,
		src: moscowSrc,
		alt: 'Moscow city',
		title: 'Москва',
		subtitle: 'Дубай, ОАЭ / Абу-Даби, ОАЭ / Сир Бани Яс, ОАЭ / Даммам, Саудовская Аравия / Дубай, ОАЭ /Катар Дубай, ОАЭ',
		href: '/port',
	},
	{
		id: 2,
		src: spSrc,
		alt: 'Санкт-Петербург',
		title: 'Москва',
		subtitle: 'Барселона, Испания / Валенсия, Испания / Барселона, Испания / Рим, Италия / Валенсия / Барселона, Испания / Рим, Италия / Валенсия, Италия / Валенсия',
		href: '/port',
	},
	{
		id: 3,
		src: sochiSrc,
		alt: 'Moscow city',
		title: 'Санкт-Петербург',
		subtitle: 'Сохна, Египет / Сафага, Египет / Акаба, Иордания / Джидда, Саудовская Аравия / Янб',
		href: '/port',
	},
	{
		id: 4,
		src: kazanSrc,
		alt: 'Moscow city',
		title: 'Казань',
		subtitle: 'Дубай, ОАЭ / Абу-Даби, ОАЭ / Сир Бани Яс, ОАЭ / Даммам, Саудовская Аравия / Дубай, ОАЭ /Катар Дубай, ОАЭ',
		href: '/port',
	},
]
