import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'

import { PartnersData } from '../data/partners-data'

import { useSwiperButtons } from '../../../../hooks'
import { Button, Container, Heading } from '../../../../components'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './partners.module.scss'
export const Partners = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container width="full" className={styles.component} tag="section">
			<div className={styles.container}>
				<Heading as="h3" className={styles.title}>
					НАШИ ПАРТНЕРЫ
				</Heading>
				<span className={styles.subtitle}>
					круизные компании
				</span>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
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
			<Button
				className={classNames(styles.swiperArrow, styles.prev)}
				onClick={handlerPrev}
			/>
			<Button
				className={classNames(styles.swiperArrow, styles.next)}
				onClick={handlerNext}
			/>
		</Container>
	)
}
