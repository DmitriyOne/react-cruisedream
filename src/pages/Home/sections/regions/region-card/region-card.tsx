import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import { RegionsData } from '../../data'
import { params } from './swiper'

import { Heading } from '../../../../../components'

import 'swiper/css'
import 'swiper/css/grid'
import styles from './region-card.module.scss'

export const RegionCard = () => {

	return (
		<Swiper
			className={styles.swiper}
			{...params}
		>
			{RegionsData.map((item, idx) =>
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
						<Link
							to={item.href}
							className={styles.cardButton}
						>
							ВЫБРАТЬ
						</Link>
					</div>
				</SwiperSlide>
			)}
		</Swiper>
	)
}
