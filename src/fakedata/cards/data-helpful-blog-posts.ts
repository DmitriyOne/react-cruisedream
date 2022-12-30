/* eslint-disable max-len */
import { ICard } from '../../model/interfaces'

import regionImg1Src from '../../components/RepeaterBlocks/HelpfulBlogPosts/images/region/1.jpg'
import regionImg2Src from '../../components/RepeaterBlocks/HelpfulBlogPosts/images/region/2.jpg'
import regionImg3Src from '../../components/RepeaterBlocks/HelpfulBlogPosts/images/region/3.jpg'

import countryImg1Src from '../../components/RepeaterBlocks/HelpfulBlogPosts/images/country/1.jpg'
import countryImg2Src from '../../components/RepeaterBlocks/HelpfulBlogPosts/images/country/2.jpg'
import countryImg3Src from '../../components/RepeaterBlocks/HelpfulBlogPosts/images/country/3.jpg'

export const dataRegionHelpfulBlogPosts: ICard[] = [
	{
		id: 1,
		src: regionImg1Src,
		alt: '',
		title: 'ЛУЧШИЕ ПЛЯЖИ СРЕДИЗЕМНОГО МОРЯ',
		href: '/blog-post',
	},
	{
		id: 2,
		src: regionImg2Src,
		alt: '',
		title: 'ГИД ПО ВИНОДЕЛЬНЯМ ТОСКАНЫ',
		href: '/blog-post',
	},
	{
		id: 3,
		src: regionImg3Src,
		alt: '',
		title: 'ЛУЧШИЕ РЕСТОРАНЫ ИТАЛИИ',
		href: '/blog-post',
	}
]

export const dataCountryHelpfulBlogPosts: ICard[] = [
	{
		id: 1,
		src: countryImg1Src,
		alt: '',
		title: 'ГИД ПО ИСПАНСКОЙ ЕДЕ',
		href: '/blog-post',
	},
	{
		id: 2,
		src: countryImg2Src,
		alt: '',
		title: 'ЛУЧШИЕ ПЛЯЖИ МАЙОРКИ',
		href: '/blog-post',
	},
	{
		id: 3,
		src: countryImg3Src,
		alt: '',
		title: 'ЗАГАДОЧНЫЕ ДВОРЦЫ ИСПАНИИ',
		href: '/blog-post',
	}
]
