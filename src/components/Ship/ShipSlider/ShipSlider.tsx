import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSwiperButtons } from '../../../hooks'
import { dataShipSlider, paramsFade } from '../../../fakedata'

import { Button } from '../../../components-ui'

import 'swiper/css'
import 'swiper/css/effect-fade'
import styles from './ship-slider.module.scss'

export const ShipSlider = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<div className={styles.component}>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...paramsFade}
			>

				{dataShipSlider.map((img, idx) =>
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
