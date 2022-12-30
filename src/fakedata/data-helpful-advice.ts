/* eslint-disable max-len */

import helpfulRegion1Src from '../components/RepeaterBlocks/HelpfulAdvice/images/region/1.jpg'
import helpfulRegion2Src from '../components/RepeaterBlocks/HelpfulAdvice/images/region/2.jpg'
import helpfulRegion3Src from '../components/RepeaterBlocks/HelpfulAdvice/images/region/3.jpg'

import helpfulCountry1Src from '../components/RepeaterBlocks/HelpfulAdvice/images/country/1.jpg'
import helpfulCountry2Src from '../components/RepeaterBlocks/HelpfulAdvice/images/country/2.jpg'
import helpfulCountry3Src from '../components/RepeaterBlocks/HelpfulAdvice/images/country/3.jpg'

import helpfulPort1Src from '../components/RepeaterBlocks/HelpfulAdvice/images/port/1.jpg'
import helpfulPort2Src from '../components/RepeaterBlocks/HelpfulAdvice/images/port/2.jpg'
import helpfulPort3Src from '../components/RepeaterBlocks/HelpfulAdvice/images/port/3.jpg'

interface IImage {
	src: string
	alt: string
}

interface IHelpFulAdvice {
	id: number
	desc: string
	images: IImage[]
}

export const dataRegionsHelpfulAdvice: IHelpFulAdvice = {
	id: 1,
	desc: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
	images: [
		{ src: helpfulRegion1Src, alt: '' },
		{ src: helpfulRegion2Src, alt: '' },
		{ src: helpfulRegion3Src, alt: '' },
	]
}

export const dataCountryHelpfulAdvice: IHelpFulAdvice = {
	id: 1,
	desc: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
	images: [
		{ src: helpfulCountry1Src, alt: '' },
		{ src: helpfulCountry2Src, alt: '' },
		{ src: helpfulCountry3Src, alt: '' },
	]
}

export const dataPortHelpfulAdvice: IHelpFulAdvice = {
	id: 1,
	desc: 'Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова',
	images: [
		{ src: helpfulPort1Src, alt: '' },
		{ src: helpfulPort2Src, alt: '' },
		{ src: helpfulPort3Src, alt: '' },
	]
}
