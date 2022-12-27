export interface ICard {
	id: number
	src?: string
	alt?: string
	title?: string
	date?: string
	subtitle?: string
	route?: string
	price?: number
	href?: string
}

interface ICardCruisePopularHeader {
	src?: string
	alt?: string
	deadline?: string
}

interface ICardCruisePopularBody {
	cruiseName?: string
}

export interface ICardCruisePopular {
	id: number
	header: ICardCruisePopularHeader
	body: ICardCruisePopularBody
}

