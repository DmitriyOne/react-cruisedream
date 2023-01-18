import { ICabinsDescCruise, IDeck } from '../../../../model/interfaces'

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

export const innerLimitCabinsDesc: ICabinsDescCruise[] = [
	{
		id: 1,
		deck: deck1,
		price: 2899,
		checked: true
	},
	{
		id: 2,
		deck: deck2,
		price: 1559,
		checked: false
	},
]

export const innerUnlimitedCabinsDesc: ICabinsDescCruise[] = [
	{
		id: 3,
		deck: deck3,
		price: 1900,
		checked: false
	},
	{
		id: 4,
		deck: deck4,
		price: 1500,
		checked: false
	},
]

export const suiteCabinsDesc: ICabinsDescCruise[] = [
	{
		id: 1,
		deck: deck3,
		price: 3900,
		checked: false
	}
]

export const withSmallWindowCabinsDesc: ICabinsDescCruise[] = [
	{
		id: 1,
		deck: deck1,
		price: 1500,
		checked: false
	},
	{
		id: 2,
		deck: deck2,
		price: 1700,
		checked: false
	},
	{
		id: 3,
		deck: deck3,
		price: 1990,
		checked: false
	},
]

export const withWindowCabinsDesc: ICabinsDescCruise[] = [
	{
		id: 1,
		deck: deck4,
		price: 1200,
		checked: false
	},
	{
		id: 2,
		deck: deck3,
		price: 1770,
		checked: false
	}
]

export const withBigWindowCabinsDesc: ICabinsDescCruise[] = [
	{
		id: 1,
		deck: deck3,
		price: 1000,
		checked: false
	},
	{
		id: 2,
		deck: deck1,
		price: 1790,
		checked: false
	}
]

export const withBalconyCabinsDesc: ICabinsDescCruise[] = [
	{
		id: 1,
		deck: deck1,
		price: 1390,
		checked: false
	},
	{
		id: 2,
		deck: deck2,
		price: 1660,
		checked: false
	}
]

