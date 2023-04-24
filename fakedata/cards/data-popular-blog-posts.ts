import { ICard } from '@crdr/interfaces'

import regionImg1Src from '@crdr/image/popular-blog-posts/1.jpg'
import regionImg2Src from '@crdr/image/popular-blog-posts/2.jpg'
import regionImg3Src from '@crdr/image/popular-blog-posts/3.jpg'

export const dataPopularBlogPosts: ICard[] = [
	{
		title: 'ЛУЧШИЕ ПЛЯЖИ СРЕДИЗЕМНОГО МОРЯ',
		image: { src: regionImg1Src, alt: '' },
		href: '/blog-post',
	},
	{
		title: 'ГИД ПО ВИНОДЕЛЬНЯМ ТОСКАНЫ',
		image: { src: regionImg2Src, alt: '' },
		href: '/blog-post',
	},
	{
		title: 'ЛУЧШИЕ РЕСТОРАНЫ ИТАЛИИ',
		image: { src: regionImg3Src, alt: '' },
		href: '/blog-post',
	},
]
