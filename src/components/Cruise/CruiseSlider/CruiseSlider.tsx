import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params } from './data/swiper'
import { DataSliderImg } from './data/data-slider'

import { useSwiperButtons } from '../../../hooks'
import { Button } from '../../Button'

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

				{DataSliderImg.map((img, idx) =>
					<SwiperSlide key={idx}>
						<span className={styles.image}>
							<img
								src={img}
								alt="Cruise 1"
							/>
						</span>
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
		</>
	)
}
