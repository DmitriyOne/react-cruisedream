import { FC } from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params } from './swiper'

import { IShipImage } from '../../../../../model/interfaces'
import { useSwiperButtons } from '../../../../../hooks'

import { Button } from '../../../../../components'

import 'swiper/css'
import 'swiper/css/effect-fade'
import styles from './slider.module.scss'

interface IProps {
	images: IShipImage[]
}

export const Slider: FC<IProps> = ({ images }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<div className={styles.component}>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...params}
			>

				{images.map((img, idx) =>
					<SwiperSlide key={idx} className={styles.image}>
						<img
							src={img.image}
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
