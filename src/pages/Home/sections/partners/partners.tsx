import { Swiper, SwiperSlide } from 'swiper/react'

import { params } from './swiper'
import { PartnersData } from '../data/partners-data'

import { Button, Container, Heading } from '../../../../components'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './partners.module.scss'

export const Partners = () => {
	return (
		<Container width="full" className={styles.component}>
			<div className={styles.container}>
				<Heading as="h3" className={styles.title}>
					НАШИ ПАРТНЕРЫ
				</Heading>
				<span className={styles.subtitle}>
					круизные компании
				</span>
				<Swiper
					className={styles.swiper}
					{...params}
				>
					{PartnersData.map(item =>
						<SwiperSlide
							key={item.id}
							className={styles.slide}
						>
							<Button
								href={item.href}
								className={styles.link}
							>
								<img
									src={item.src}
									alt={item.alt}
								/>
							</Button>
						</SwiperSlide>
					)}
					<div className={styles.pagination} />
				</Swiper>
			</div>
		</Container>
	)
}
