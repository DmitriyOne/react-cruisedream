import { Grid, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { RegionCardsData } from './region-cards-data'

import { Button, Heading } from '../../../../../components'

import 'swiper/css'
import 'swiper/css/grid'
import styles from './region-card.module.scss'

const params: SwiperOptions = {
	slidesPerView: 1.05,
	spaceBetween: 15,
	modules: [Grid],
	breakpoints: {
		1280: {
			slidesPerView: 3,
			spaceBetween: 40,
			grid: {
				rows: 2,
				fill: 'row'
			},
		},
		1024: {
			spaceBetween: 20,
			slidesPerView: 2.6,
		},
		990: {
			slidesPerView: 2.6,
		},
		768: {
			slidesPerView: 2.2,
		},
		620: {
			slidesPerView: 1.6,
		}
	}
}

export const RegionCard = () => {

	return (
		<Swiper
			className={styles.swiper}
			{...params}
		>
			{RegionCardsData.map((item, idx) =>
				<SwiperSlide
					className={styles.slide}
					key={idx}
				>
					<div className={styles.cardImageWrapper} >
						<img
							className={styles.cardImage}
							src={item.src}
							alt={item.alt}
						/>
					</div>
					<div className={styles.cardContent}>
						<Heading as="h4" className={styles.cardTitle}>
							{item.title}
						</Heading>
						<p className={styles.cardDescription}>
							{item.description}
						</p>
						<Button
							reactHref={item.href}
							className={styles.cardButton}
						>
							ВЫБРАТЬ
						</Button>
					</div>
				</SwiperSlide>
			)}
		</Swiper>

	)
}
