import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import partner1Image from '../../../../assets/images/partners/partner-caribbean.png'
import partner2Image from '../../../../assets/images/partners/partner-celebrity.png'
import partner3Image from '../../../../assets/images/partners/partner-msc-cruises.png'

import { Container, Heading } from '../../../../components'

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
					slidesPerView={3}
					spaceBetween={25}
					modules={[Pagination]}
					pagination={{
						el: `.${styles.pagination}`,
						clickable: true,
						bulletClass: `${styles.bullet}`,
						bulletActiveClass: `${styles.active}`
					}}
					loop={true}
					className={styles.swiper}
				>
					<SwiperSlide className={styles.slide}>
						<img
							src={partner1Image}
							alt="Partner Caribbean"
						/>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<img
							src={partner2Image}
							alt="Partner Celebrity"
						/>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<img
							src={partner3Image}
							alt="Partner MSC Cruises"
						/>
					</SwiperSlide>
					<div className={styles.pagination} />
				</Swiper>
			</div>
		</Container>
	)
}
