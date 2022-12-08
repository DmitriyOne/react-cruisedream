import { FC } from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params } from './swiper'

import { useSwiperButtons } from '../../../hooks'
import { Button } from '../../Button'

import 'swiper/css'
import 'swiper/css/effect-fade'
import styles from './cruise-slider.module.scss'

interface IProps {
	images: string[]
}

export const CruiseSlider: FC<IProps> = ({ images }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...params}
			>

				{images.map((img, idx) =>
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
