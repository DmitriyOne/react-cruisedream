/* eslint-disable max-len */
import { ICard } from '../../model/interfaces'

import img1Src from '../../components/RepeaterBlocks/HelpfulBlogPosts/images/region/1.jpg'
import img2Src from '../../components/RepeaterBlocks/HelpfulBlogPosts/images/region/2.jpg'
import img3Src from '../../components/RepeaterBlocks/HelpfulBlogPosts/images/region/3.jpg'

export const dataHelpfulBlogPosts: ICard[] = [
	{
		id: 1,
		src: img1Src,
		alt: '',
		title: 'ЛУЧШИЕ ПЛЯЖИ СРЕДИЗЕМНОГО МОРЯ',
		href: '/blog-post',
	},
	{
		id: 2,
		src: img2Src,
		alt: '',
		title: 'ГИД ПО ВИНОДЕЛЬНЯМ ТОСКАНЫ',
		href: '/blog-post',
	},
	{
		id: 3,
		src: img3Src,
		alt: '',
		title: 'ЛУЧШИЕ РЕСТОРАНЫ ИТАЛИИ',
		href: '/blog-post',
	}
]
