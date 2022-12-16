import { ICruiseOption, IExtraTitle, IIncludedTitle } from '../../model/interfaces'
import { iconIncludedCruise1, iconIncludedCruise2, iconIncludedCruise3 } from './data-included-icons'

const includedTitle: IIncludedTitle[] = [
	{ title: 'Проживание в каюте Проживание в каюте Проживание в каюте Проживание в каюте' },
	{ title: 'Питание во время круиза' },
	{ title: 'Портовые сборы и таксы' },
	{ title: 'Дневные развлечения на борту' },
	{ title: 'Вечерняя развлекательная программа' },
	{ title: 'Представления в театре' },
	{ title: 'Выступление артистов в течение дня на борту' },
	{ title: 'Детский клуб' },
	{ title: 'Фитнес-клуб' },
]

const extraTitle: IExtraTitle[] = [
	{ title: 'Авиаперелёт' },
	{ title: 'Медицинская страховка' },
	{ title: 'Страховка от невыезда' },
	{ title: 'Визы' },
	{ title: 'Трансфер аэропорт/порт/аэропорт' },
	{ title: 'Чаевые персоналу' },
	{ title: 'Алкогольные напитки' },
	{ title: 'Альтернативные рестораны' },
	{ title: 'Услуги спа, салона красоты, тренера в фитнес клубе и няни в детском клубе' },
	{ title: 'Экскурсии' },
	{ title: 'Интернет' },
]

export const DataOptions: ICruiseOption = {
	icons: iconIncludedCruise1,
	included: includedTitle,
	extra: extraTitle
}

export const DataOptions2: ICruiseOption = {
	icons: iconIncludedCruise2,
	included: includedTitle,
	extra: extraTitle
}

export const DataOptions3: ICruiseOption = {
	icons: iconIncludedCruise3,
	included: includedTitle,
	extra: extraTitle
}
