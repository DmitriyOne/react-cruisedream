import classNames from 'classnames'
import { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { paramsFade } from '../../../../../fakedata'

import { Button } from '../../../../../components-ui'

import { useOpen, useSwiperButtons } from '../../../../../hooks'
import { ICabinsImages } from '../../../../../model/interfaces'

import styles from './desc-left.module.scss'
import { MyLightbox } from '../../../../../components-plugin'

interface IProps {
	id: number
	images: ICabinsImages[]
}

export const DescLeft: FC<IProps> = ({ id, images }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()
	const { isOpen: isOpenGallery, onOpen: onOpenGallery, onClose: onCloseGallery } = useOpen()

	return (
		<>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...paramsFade}
			>
				{images.map((slide, idx) =>
					<SwiperSlide key={idx} className={styles.slide}>
						<img onClick={onOpenGallery} src={slide.src} alt={slide.alt} />
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
				isOpenGallery={isOpenGallery}
				onCloseGallery={onCloseGallery}
				images={images}
			/>
		</>
	)
}
