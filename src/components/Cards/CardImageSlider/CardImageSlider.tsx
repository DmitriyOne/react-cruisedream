import classNames from 'classnames'
import { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'

import { useSwiperButtons } from '../../../hooks'
import { Button } from '../../../components-ui/Button'

import 'swiper/css'
import styles from './card-image-slider.module.scss'

interface IImage {
	src: string
	alt: string
}

interface IProps {
	images: IImage[]
}

export const CardImageSlider: FC<IProps> = ({ images }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Swiper
			className={styles.component}
			onSwiper={upDateSwiper}
			{...params}
		>
			{images.map((image, idx) =>
				<SwiperSlide key={idx} className={styles.slide}>
					<img
						className={styles.image}
						src={image.src}
						alt={image.alt}
					/>
				</SwiperSlide>
			)}
			<Button
				className={classNames(styles.swiperArrow, styles.prev)}
				onClick={handlerPrev}
			/>
			<Button
				className={classNames(styles.swiperArrow, styles.next)}
				onClick={handlerNext}
			/>
		</Swiper>
	)
}
