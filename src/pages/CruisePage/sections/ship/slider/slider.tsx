import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './data/swiper'

import { useSwiperButtons } from '../../../../../hooks'

import { Button } from '../../../../../components'

import 'swiper/css'
import 'swiper/css/effect-fade'
import styles from './slider.module.scss'
import { DataSliderImg } from './data/data-slider'

export const Slider = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<div className={styles.component}>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...params}
			>

				{DataSliderImg.map((img, idx) =>
					<SwiperSlide key={idx} className={styles.image}>
						<img
							src={img}
							alt="Cruise 1"
						/>
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
	)
}
