import saleImg from '../../pages/HomePage/sections/sale/images/sale-1.jpeg'

import { CRUISE_ROUTES } from '../../constants'

export const dataSale = [
	{
		src: saleImg,
		alt: 'Coconut cocktail on the beach',
		title: 'КРУИЗ ДНЯ',
		description: 'лучшее предложение',
		href: `${CRUISE_ROUTES.EMPTY}`,
		discount: false,
		discountPercentage: 0,
	},
	{
		src: saleImg,
		alt: 'Coconut cocktail on the beach',
		title: 'ПЛЯЖИ',
		description: 'на выходные',
		href: `${CRUISE_ROUTES.EMPTY}`,
		discount: false,
		discountPercentage: 0,
	},
	{
		src: saleImg,
		alt: 'Coconut cocktail on the beach',
		title: 'КАНИКУЛЫ',
		description: 'на островах',
		href: `${CRUISE_ROUTES.EMPTY}`,
		discount: true,
		discountPercentage: 20,
	},
	{
		src: saleImg,
		alt: 'Coconut cocktail on the beach',
		title: 'ШОПИНГТУР',
		description: 'на уикенд',
		href: `${CRUISE_ROUTES.EMPTY}`,
		discount: true,
		discountPercentage: 25,
	}
]
