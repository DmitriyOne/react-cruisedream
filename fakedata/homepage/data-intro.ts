import { IBannerWithSlider } from '@crdr/interfaces'

import bgImage1 from '@crdr/image/banners/with-slider/intro-1.jpeg'
import bgImage2 from '@crdr/image/banners/with-slider/intro-2.jpeg'
import bgImage3 from '@crdr/image/banners/with-slider/intro-3.jpeg'

export const dataBannerWithSlider: IBannerWithSlider[] = [
	{
		title: 'НА СЕМЕЙНЫЙ КРУИЗ',
		discountPercentage: 30,
		href: '#',
		bgImage: { src: bgImage1, alt: 'Beautiful sea breeze' },
		position: 'left',
	},
	{
		title: 'На девчачий круиз',
		discountPercentage: 25,
		href: '#',
		bgImage: { src: bgImage2, alt: 'Family look at the sea' },
		position: 'center',
	},
	{
		title: 'НА свадебный КРУИЗ',
		discountPercentage: 50,
		href: '#',
		bgImage: { src: bgImage3, alt: 'Family walk at the sea' },
		position: 'right',
	},
]
