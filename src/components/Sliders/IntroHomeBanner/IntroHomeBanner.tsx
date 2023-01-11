import { FC } from 'react'

import { IntroContent } from '../../../pages/HomePage/sections/intro/content/content'
import { Container } from '../../Container'

import styles from './intro-home-banner.module.scss'

enum ETextDirection {
	left = 'left',
	center = 'center',
	right = 'right'
}

interface IProps {
	src?: string
	alt?: string
	title?: string
	href?: string
	textPosition?: keyof typeof ETextDirection
	discount?: number
}

export const IntroHomeBanner: FC<IProps> = ({ ...swiper }) => {
	console.log('render')


	return (
		<>
			<div className={styles.imageWrapper}>
				<img
					className={styles.image}
					src={swiper.src}
					alt={swiper.alt}
				/>
			</div>
			<Container
				width="containerXl"
			>
				<IntroContent
					title={swiper.title}
					href={swiper.href}
					variant={swiper.textPosition}
					discount={swiper.discount}
				/>
			</Container>
		</>
	)
}
