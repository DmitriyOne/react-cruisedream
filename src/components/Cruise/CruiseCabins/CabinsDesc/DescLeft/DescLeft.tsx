import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params, swiperImages } from '../../data/swiper'

import { Button } from '../../../../../components'
import { useSwiperButtons } from '../../../../../hooks'

import 'swiper/css'
import styles from './desc-left.module.scss'

export const DescLeft = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<>
			<div className={styles.swiperContainer}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params}
				>
					{swiperImages.map((slide, idx) =>
						<SwiperSlide key={idx} className={styles.slide}>
							<img src={slide.src} alt={slide.alt} />
						</SwiperSlide>
					)}
				</Swiper>
				<Button
					className={classNames(styles.swiperArrow, styles.prev)}
					onClick={handlerPrev}
				/>
				<Button
					className={classNames(styles.swiperArrow, styles.next)}
					onClick={handlerNext}
				/>
			</div>
			<Button className={styles.showMore}>
				Описание
			</Button>
		</>
	)
}
