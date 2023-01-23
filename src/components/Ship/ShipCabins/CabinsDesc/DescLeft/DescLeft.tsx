import classNames from 'classnames'
import { FC, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { paramsFade } from '../../../../../fakedata'

import { Button } from '../../../../../components-ui'
import { MyLightbox } from '../../../../../components-plugin'

import { useSwiperButtons } from '../../../../../hooks'
import { ICabinsImages } from '../../../../../model/interfaces'

import styles from './desc-left.module.scss'

interface IProps {
	images: ICabinsImages[]
}

export const DescLeft: FC<IProps> = ({ images }) => {
	const [index, setIndex] = useState(-1)
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	const onShowGallery = (idx: number) => {
		setIndex(idx - 1)
	}

	return (
		<>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...paramsFade}
			>
				{images.map((slide, idx) =>
					<SwiperSlide key={idx} className={styles.slide}>
						<img onClick={() => onShowGallery(slide.id)} src={slide.src} alt={slide.alt} />
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

			<MyLightbox
				isOpenGallery={index >= 0}
				index={index}
				onCloseGallery={() => setIndex(-1)}
				images={images}
			/>
		</>
	)
}
