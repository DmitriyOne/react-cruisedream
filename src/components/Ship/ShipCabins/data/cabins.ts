/* eslint-disable max-len */
import cabinsImage1Src from '../../../../assets/images/cabins/cabins-1.jpg'

import { ICabinsShip, ICabinsImages } from '../../../../model/interfaces'
import { dataShipModal1, dataShipModal2 } from './ship-modal'

export const swiperImages: ICabinsImages = { src: cabinsImage1Src, alt: 'Cool cabin' }

export const cabinsInner: ICabinsShip[] = [
	{
		id: 1,
		title: 'КАЮТА С БАЛКОНОМ С ОГРАНИЧЕННЫМ ВИДОМ',
		images: swiperImages,
		description: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
		modal: dataShipModal1
	},
	{
		id: 2,
		title: 'КАЮТА С БАЛКОНОМ С ВИДОМ НА ПРОГУЛОЧНУЮ ПАЛУБУ',
		images: swiperImages,
		description: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
		modal: dataShipModal2
	}
]

export const cabinsSuite: ICabinsShip[] = [
	{
		id: 1,
		title: 'КАЮТА Сьют',
		images: swiperImages,
		description: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
		modal: dataShipModal1
	}
]

export const cabinsBalcony: ICabinsShip[] = [
	{
		id: 1,
		title: 'КАЮТА c балконом',
		images: swiperImages,
		description: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
		modal: dataShipModal1
	}
]

export const cabinsWindow: ICabinsShip[] = [
	{
		id: 1,
		title: 'КАЮТА c обычным окном',
		images: swiperImages,
		description: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
		modal: dataShipModal1
	},
	{
		id: 2,
		title: 'КАЮТА c большим окном',
		images: swiperImages,
		description: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
		modal: dataShipModal2
	},
	{
		id: 3,
		title: 'КАЮТА c очень большим окном',
		images: swiperImages,
		description: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
		modal: dataShipModal1
	}
]
