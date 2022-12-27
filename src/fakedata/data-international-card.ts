/* eslint-disable max-len */
import { CRUISE_ROUTES } from '../constants'
import { ICard } from '../model/interfaces'

import dubaiSrc from '../assets/images/international/1.jpg'
import istanbulSrc from '../assets/images/international/2.jpg'
import kusadasiSrc from '../assets/images/international/3.jpg'
import barcelonaSrc from '../assets/images/international/4.jpg'

export const dataInternationalCard: ICard[] = [
	{
		id: 1,
		src: dubaiSrc,
		alt: 'Moscow city',
		title: 'Дубай',
		subtitle: 'Сохна, Египет / Сафага, Египет / Акаба, Иордания / Джидда, Саудовская Аравия / Янб',
		href: `${CRUISE_ROUTES.EMPTY}`
	},
	{
		id: 2,
		src: istanbulSrc,
		alt: 'Санкт-Петербург',
		title: 'Стамбул',
		subtitle: 'Барселона, Испания / Валенсия, Испания / Барселона, Испания / Рим, Италия / Валенсия / Барселона, Испания / Рим, Италия / Валенсия, Италия / Валенсия',
		href: `${CRUISE_ROUTES.EMPTY}`
	},
	{
		id: 3,
		src: kusadasiSrc,
		alt: 'Moscow city',
		title: 'Кушадасы',
		subtitle: 'Дубай, ОАЭ / Абу-Даби, ОАЭ / Сир Бани Яс, ОАЭ / Даммам, Саудовская Аравия / Дубай, ОАЭ /Катар Дубай, ОАЭ',
		href: `${CRUISE_ROUTES.EMPTY}`
	},
	{
		id: 4,
		src: barcelonaSrc,
		alt: 'Moscow city',
		title: 'Барселона',
		subtitle: 'Барселона, Испания / Абу-Даби, ОАЭ / Сир Бани Яс, ОАЭ / Даммам, Саудовская Аравия / Дубай, ОАЭ /Катар Дубай, ОАЭ / Валенсия, Испания / Барселона, Испания',
		href: `${CRUISE_ROUTES.EMPTY}`
	},
]
