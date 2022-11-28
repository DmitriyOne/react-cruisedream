import saleImg from '../../../../../assets/images/sale/sale-1.jpeg'
import { CRUISE_ROUTES } from '../../../../../constants'

export const SaleCardData = [
	{
		src: saleImg,
		alt: 'Coconut cocktail on the beach',
		title: 'КРУИЗ ДНЯ',
		description: 'лучшее предложение',
		href: `${CRUISE_ROUTES.SALE}`,
		discount: false,
		discountPercentage: 0,
	},
	{
		src: saleImg,
		alt: 'Coconut cocktail on the beach',
		title: 'ПЛЯЖИ',
		description: 'на выходные',
		href: `${CRUISE_ROUTES.SALE}`,
		discount: false,
		discountPercentage: 0,
	},
	{
		src: saleImg,
		alt: 'Coconut cocktail on the beach',
		title: 'КАНИКУЛЫ',
		description: 'на островах',
		href: `${CRUISE_ROUTES.SALE}`,
		discount: true,
		discountPercentage: 20,
	},
	{
		src: saleImg,
		alt: 'Coconut cocktail on the beach',
		title: 'ШОПИНГТУР',
		description: 'на уикенд',
		href: `${CRUISE_ROUTES.SALE}`,
		discount: true,
		discountPercentage: 25,
	}
]
