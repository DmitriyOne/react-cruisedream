export interface IShipImage {
	image: string
}

export interface IShipLinks {
	href: string
	text: string
}

export interface IShip {
	name: string
	images: IShipImage[]
	year: number
	capacity: number
	weight: number
	team: number
	description: string
	links: IShipLinks[]
}
