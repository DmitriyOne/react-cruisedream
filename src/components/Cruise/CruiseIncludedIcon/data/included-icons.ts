import { IIncludedIcon } from '../../../../model/interfaces'
import iconService from '../../../../assets/images/included/service.svg'
import iconPlane from '../../../../assets/images/included/plane.svg'
import iconHotel from '../../../../assets/images/included/hotel.svg'
import iconTrain from '../../../../assets/images/included/train.svg'
import iconCash from '../../../../assets/images/included/money.svg'
import iconStops from '../../../../assets/images/included/stops.svg'
import iconBar from '../../../../assets/images/included/bar.svg'

export const DataIncludedIcon: IIncludedIcon[] = [
	{ title: 'Сервис', src: iconService, alt: 'Service icon' },
	{ title: 'Перелет', src: iconPlane, alt: 'Plane icon' },
	{ title: 'Отель', src: iconHotel, alt: 'Hotel icon' },
	{ title: 'Поезд', src: iconTrain, alt: 'Train icon' },
	{ title: 'Чаевые', src: iconCash, alt: 'Cash icon' },
	{ title: 'Остановки', src: iconStops, alt: 'Stops icon' },
	{ title: 'Бар', src: iconBar, alt: 'Bar icon' }
]
