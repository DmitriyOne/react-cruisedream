import { ISelectGroup } from '../../model/interfaces'

// export const optionRegionHome = [
// 	{
// 		value: 'Регион 1',
// 		label: 'Регион 1'
// 	},
// 	{
// 		value: 'Регион 2',
// 		label: 'Регион 2'
// 	},
// 	{
// 		value: 'Регион 3',
// 		label: 'Регион 3'
// 	}
// ]


// export const optionCompanyHome = [
// 	{
// 		value: 'Компания 	1',
// 		label: 'Компания  1'
// 	},
// 	{
// 		value: 'Компания  2',
// 		label: 'Компания  2'
// 	},
// 	{
// 		value: 'Компания 3',
// 		label: 'Компания 3'
// 	}
// ]

// export const optionPort1 = [
// 	{
// 		value: 'Порт отправления 1',
// 		label: 'Порт отправления 1'
// 	},
// 	{
// 		value: 'Порт отправления 2',
// 		label: 'Порт отправления 2'
// 	},
// 	{
// 		value: 'Порт отправления 3',
// 		label: 'Порт отправления 3'
// 	},
// ]

// export const optionPort2 = [
// 	{
// 		value: 'Порты захода 1',
// 		label: 'Порты захода 1'
// 	},
// 	{
// 		value: 'Порты захода 2',
// 		label: 'Порты захода 2'
// 	},
// 	{
// 		value: 'Порты захода 3',
// 		label: 'Порты захода 3'
// 	},
// 	{
// 		value: 'Порты захода 4',
// 		label: 'Порты захода 4'
// 	},
// 	{
// 		value: 'Порты захода 5',
// 		label: 'Порты захода 5'
// 	},
// ]

// export const optionPort3 = [
// 	{
// 		value: 'Порт прибытия 1',
// 		label: 'Порт прибытия 1'
// 	},
// 	{
// 		value: 'Порт прибытия 2',
// 		label: 'Порт прибытия 2'
// 	},
// 	{
// 		value: 'Порт прибытия 3',
// 		label: 'Порт прибытия 3'
// 	},
// 	{
// 		value: 'Порт прибытия 4',
// 		label: 'Порт прибытия 4'
// 	},
// ]

// export const optionShip = [
// 	{
// 		value: 'Круизный лайнер 1',
// 		label: 'Круизный лайнер 1'
// 	},
// 	{
// 		value: 'Круизный лайнер 2',
// 		label: 'Круизный лайнер 2'
// 	},
// 	{
// 		value: 'Круизный лайнер 3',
// 		label: 'Круизный лайнер 3'
// 	},
// 	{
// 		value: 'Круизный лайнер 4',
// 		label: 'Круизный лайнер 4'
// 	},
// 	{
// 		value: 'Круизный лайнер 5',
// 		label: 'Круизный лайнер 5'
// 	},
// ]

// export const optionTypeCruise = [
// 	{
// 		value: 'Тип круиза 1',
// 		label: 'Тип круиза 1'
// 	},
// 	{
// 		value: 'Тип круиза 2',
// 		label: 'Тип круиза 2'
// 	},
// 	{
// 		value: 'Тип круиза 3',
// 		label: 'Тип круиза 3'
// 	},
// 	{
// 		value: 'Тип круиза 4',
// 		label: 'Тип круиза 4'
// 	},
// ]

export const optionSortCurrency = [
	{
		value: '$',
		label: '$',
		tag: '$'
	},
	{
		value: '€',
		label: '€',
		tag: '€'
	},
	{
		value: '₽',
		label: '₽',
		tag: '₽'
	}
]

export const optionSortBy = [
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
		tag: 'recommended'
	},
]

const popularOptions = [
	{ value: 'Регион 1', label: 'Регион 1', tag: 'popular' },
	{ value: 'Порт 1', label: 'Порт 1', tag: 'popular' },
	{ value: 'Круиз 1', label: 'Круиз 1', tag: 'popular' },
]

const popularOptions2 = [
	{ value: 'Корабль 3', label: 'Корабль 3', tag: 'popular' },
	{ value: 'Компания 1', label: 'Компания 1', tag: 'popular' },
	{ value: 'Порт 2', label: 'Порт 2', tag: 'popular' },
	{ value: 'Регион 5', label: 'Регион 5', tag: 'popular' },
]

const otherOptions = [
	{ value: 'Регион 2', label: 'Регион 2', tag: 'other' },
	{ value: 'Регион 3', label: 'Регион 3', tag: 'other' },
	{ value: 'Регион 4', label: 'Регион 4', tag: 'other' },
	{ value: 'Регион 6', label: 'Регион 6', tag: 'other' },
	{ value: 'Регион 7', label: 'Регион 7', tag: 'other' }
]

const other2Options = [
	{ value: 'Компания 2', label: 'Компания 2', tag: 'other2' },
	{ value: 'Корабль 4', label: 'Корабль 4', tag: 'other2' },
	{ value: 'Порт 4', label: 'Регион 4', tag: 'other2' },
	{ value: 'Регион 8', label: 'Регион 8', tag: 'other2' },
	{ value: 'Корабль 6', label: 'Корабль 6', tag: 'other2' }
]

export const groupedOptions: ISelectGroup[] = [
	{
		label: 'Популярное',
		options: popularOptions,
		tag: 'popular',
	},
	{
		label: 'Разное',
		options: otherOptions,
		tag: 'other1'
	},
	{
		label: 'Разное 2',
		options: other2Options,
		tag: 'other2'
	}
]

export const groupedOptions2: ISelectGroup[] = [
	{
		label: 'Популярное',
		options: popularOptions2,
		tag: 'popular',
	},
	{
		label: 'Разное',
		options: other2Options,
		tag: 'other2'
	},
	{
		label: 'Другие',
		options: otherOptions,
		tag: 'other1'
	},
]
