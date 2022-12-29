import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'

import { dataSale } from '../../../../../fakedata'

import { Heading, Discount } from '../../../../../components'

import styles from './sale-card.module.scss'

export const SaleCard = () => {

	return (
		<Swiper
			className={styles.swiper}
			{...params}
		>
			{dataSale.map((item, idx) => {
				const isSale = item.discount
				return (
					<SwiperSlide
						className={styles.slide}
						key={idx}
					>
						<Link
							to={item.href}
							className={styles.link}
						>
							<div className={styles.cardImageWrapper} >
								<img
									className={styles.cardImage}
									src={item.src}
									alt={item.alt}
								/>
							</div>
							<Heading as="h4" className={styles.cardTitle}>
								{item.title}
							</Heading>
							<p className={styles.cardDescription}>
								{item.description}
							</p>
							{isSale &&
								<Discount
									percentage={item.discountPercentage}
									className={styles.discount}
								/>}
						</Link>
					</SwiperSlide>
				)
			}
			)}
		</Swiper >
	)
}
