/* eslint-disable no-unused-vars */
import bgImage1 from '../../components/RepeaterBlocks/IntroHome/images/intro-1.jpeg'
import bgImage2 from '../../components/RepeaterBlocks/IntroHome/images/intro-2.jpeg'
import bgImage3 from '../../components/RepeaterBlocks/IntroHome/images/intro-3.jpeg'

import { CRUISE_ROUTES } from '../../constants'

enum ETextDirection {
	left = 'left',
	center = 'center',
	right = 'right'
}

export const dataIntro = [
	{
		src: bgImage1,
		alt: 'Family look at the sea',
		title: 'НА СЕМЕЙНЫЙ КРУИЗ',
		href: `/${CRUISE_ROUTES.EMPTY}`,
		textPosition: ETextDirection.left,
		discount: 30,
	},
	{
		src: bgImage2,
		alt: 'Beautiful sea breeze',
		title: 'На девчачий круиз',
		href: `/${CRUISE_ROUTES.EMPTY}`,
		textPosition: ETextDirection.center,
		discount: 25,
	},
	{
		src: bgImage3,
		alt: 'Family walk at the sea',
		title: 'НА свадебный КРУИЗ',
		href: `/${CRUISE_ROUTES.EMPTY}`,
		textPosition: ETextDirection.right,
		discount: 50,
	}
]
