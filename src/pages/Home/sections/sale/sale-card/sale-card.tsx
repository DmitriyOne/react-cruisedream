import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, Heading } from '../../../../../components'
import { Discount } from '../discount/discount'
import { SaleCardData } from './sale-card-data'

import styles from './sale-card.module.scss'

const params: SwiperOptions = {
	slidesPerView: 1.05,
	spaceBetween: 15,
	breakpoints: {
		1280: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3.3,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 2.5,
			spaceBetween: 30,
		},
		620: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
		520: {
			slidesPerView: 1.7,
		}
	}
}

export const SaleCard = () => {

	return (
		<Swiper
			className={styles.swiper}
			{...params}
		>
			{SaleCardData.map((item, idx) => {
				const isSale = item.discount
				return (
					<SwiperSlide
						className={styles.slide}
						key={idx}
					>
						<Button
							reactHref={item.href}
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
							{isSale && <Discount percentage={item.discountPercentage} />}
						</Button>
					</SwiperSlide>
				)
			}
			)}
		</Swiper >
	)
}
