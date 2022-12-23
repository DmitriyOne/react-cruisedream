import { ICabinsDesc, IDeck } from '../../../../model/interfaces'

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

export const innerCabins: ICabinsDesc[] = [
	{
		id: 1,
		deck: deck1,
		price: 2899,
		checked: false
	},
	{
		id: 2,
		deck: deck2,
		price: 1559,
		checked: false
	},
]
