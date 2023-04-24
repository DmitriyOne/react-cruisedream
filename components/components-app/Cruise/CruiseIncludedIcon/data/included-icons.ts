import { IIncludedIcon } from '@crdr/interfaces'

import iconBar from '../icons/bar.svg'
import iconHotel from '../icons/hotel.svg'
import iconCash from '../icons/money.svg'
import iconPlane from '../icons/plane.svg'
import iconService from '../icons/service.svg'
import iconStops from '../icons/stops.svg'
import iconTrain from '../icons/train.svg'

export const DataIncludedIcon: IIncludedIcon[] = [
	{ title: 'Сервис', src: iconService, alt: 'Service icon' },
	{ title: 'Перелет', src: iconPlane, alt: 'Plane icon' },
	{ title: 'Отель', src: iconHotel, alt: 'Hotel icon' },
	{ title: 'Поезд', src: iconTrain, alt: 'Train icon' },
	{ title: 'Чаевые', src: iconCash, alt: 'Cash icon' },
	{ title: 'Остановки', src: iconStops, alt: 'Stops icon' },
	{ title: 'Бар', src: iconBar, alt: 'Bar icon' },
]
