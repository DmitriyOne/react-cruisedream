import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'

import styles from './card-image-slider.module.scss'

interface IImage {
	src: string
	alt: string
}

interface IProps {
	images: IImage[]
}

export const CardImageSlider: FC<IProps> = ({ images }) => {

	return (
		<Swiper
			className={styles.component}
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
		</Swiper>
	)
}
