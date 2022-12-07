import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params } from './data-swiper'

import { useSwiperButtons } from '../../../hooks'
import { Button } from '../../Button'

import imageSrc1 from './images/cruise-1.jpeg'
import imageSrc2 from './images/cruise-2.jpeg'

import 'swiper/css'
import 'swiper/css/effect-fade'
import styles from './cruise-slider.module.scss'

export const CruiseSlider = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...params}
			>

				<SwiperSlide>
					<span className={styles.image}>
						<img
							src={imageSrc1}
							alt="Cruise 1"
						/>
					</span>
				</SwiperSlide>

				<SwiperSlide>
					<span className={styles.image}>
						<img
							src={imageSrc2}
							alt="Cruise 2"
						/>
					</span>
				</SwiperSlide>
			</Swiper>
			<Button
				className={classNames(styles.swiperArrow, styles.prev)}
				onClick={handlerPrev}
			/>
			<Button
				className={classNames(styles.swiperArrow, styles.next)}
				onClick={handlerNext}
			/>
		</>
	)
}
