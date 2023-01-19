import { ICabinsContentCruise, IDeck } from '../../../../model/interfaces'

const deck1: IDeck = {
	code: 'A1',
	name: 'Палуба - 21'
}

const deck2: IDeck = {
	code: 'A2',
	name: 'Палуба - 19'
}

const deck3: IDeck = {
	code: 'BU',
	name: 'Палуба - 6'
}

const deck4: IDeck = {
	code: 'BY',
	name: 'Палуба - 8'
}

export const innerLimitCabinsDesc: ICabinsContentCruise[] = [
	{
		id: 1,
		deck: deck1,
		price: 2899,
		checked: true,
	},
	{
		id: 2,
		deck: deck2,
		price: 1559,
		checked: false,
	},
]

export const innerUnlimitedCabinsDesc: ICabinsContentCruise[] = [
	{
		id: 3,
		deck: deck3,
		price: 1900,
		checked: false,
	},
	{
		id: 4,
		deck: deck4,
		price: 1500,
		checked: false,
	},
]

export const suiteCabinsDesc: ICabinsContentCruise[] = [
	{
		id: 5,
		deck: deck3,
		price: 3900,
		checked: false,
	}
]

export const withSmallWindowCabinsDesc: ICabinsContentCruise[] = [
	{
		id: 6,
		deck: deck1,
		price: 1500,
		checked: false,
	},
	{
		id: 7,
		deck: deck2,
		price: 1700,
		checked: false,
	},
	{
		id: 8,
		deck: deck3,
		price: 1990,
		checked: false,
	},
]

export const withWindowCabinsDesc: ICabinsContentCruise[] = [
	{
		id: 9,
		deck: deck4,
		price: 1200,
		checked: false,
	},
	{
		id: 10,
		deck: deck3,
		price: 1770,
		checked: false,
	}
]

export const withBigWindowCabinsDesc: ICabinsContentCruise[] = [
	{
		id: 11,
		deck: deck3,
		price: 1000,
		checked: false,
	},
	{
		id: 12,
		deck: deck1,
		price: 1790,
		checked: false,
	}
]

export const withBalconyCabinsDesc: ICabinsContentCruise[] = [
	{
		id: 13,
		deck: deck1,
		price: 1390,
		checked: false,
	},
	{
		id: 14,
		deck: deck2,
		price: 1660,
		checked: false,
	}
]

