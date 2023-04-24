import { ISelect } from '@crdr/interfaces'

export const optionSortCurrency: ISelect[] = [
	{
		value: '$',
		label: '$',
		tag: '$',
	},
	{
		value: '€',
		label: '€',
		tag: '€',
	},
	{
		value: '₽',
		label: '₽',
		tag: '₽',
	},
]

export const optionSortBy: ISelect[] = [
	{
		value: 'Сортировать по датам',
		label: 'Сортировать по датам',
		tag: 'date',
	},
	{
		value: 'Сортировать по продолжительности',
		label: 'Сортировать по продолжительности',
		tag: 'duration',
	},
	{
		value: 'Сортировать по алфавиту',
		label: 'Сортировать по алфавиту',
		tag: 'alphabet',
	},
	{
		value: 'Сортировать по рекомендуемому',
		label: 'Сортировать по рекомендуемому',
		tag: 'recommended',
	},
]
