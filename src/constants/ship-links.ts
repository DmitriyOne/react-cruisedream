import { IShipLinks } from '../model/interfaces'
import { SHIP_LINKS } from './ship'

export const SHIP_LINKS_TO: IShipLinks[] = [
	{ href: SHIP_LINKS.info, text: 'ИНФОРМАЦИЯ О КОРАБЛЕ', },
	{ href: SHIP_LINKS.photos, text: ' ФОТОГАЛЕРЕЯ', },
	{ href: SHIP_LINKS.plan, text: 'ПЛАН ПАЛУБ', },
	{ href: SHIP_LINKS.cabins, text: 'КАЮТЫ', },
]
