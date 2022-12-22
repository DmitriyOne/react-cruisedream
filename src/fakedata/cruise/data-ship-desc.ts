/* eslint-disable max-len */
import img1Src from '../../assets/images/ship/1.jpg'
import img2Src from '../../assets/images/ship/2.jpg'

import { SHIP_LINKS_TO } from '../../constants'
import { IShip, IShipImage } from '../../model/interfaces/IShip'

const shipImages: IShipImage[] = [
	{ image: img1Src },
	{ image: img2Src }
]

const desc = 'Круиз на борту лайнера MSC Splendida – это комфортное и стильное путешествие на современном корабле. Splendida переводится с итальянского как великолепная, и попав на борт, вы сразу же поймёте, почему лайнер получил свой имя. Изысканный, элегантный дизайн, который грамотно сочетает в себе итальянскую классику с яркими акцентами круиз на борту лайнера MSC Splendida – это комфортное и стильное путешествие на современном корабле. Splendida переводится с итальянского как великолепная, и попав на борт, вы сразу же поймёте, почему лайнер получил свой имя. Изысканный, элегантный дизайн, который грамотно сочетает в себе итальянскую классику с яркими акцентами'

export const DataShipDesc: IShip = {
	name: 'MSC Splendida',
	images: shipImages,
	year: 2009,
	capacity: 3959,
	weight: 1333,
	team: 1325,
	description: desc,
	links: SHIP_LINKS_TO
}
