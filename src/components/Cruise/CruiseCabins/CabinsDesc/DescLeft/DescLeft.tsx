import { FC, useState } from 'react'
import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'

import { paramsFade } from '../../../../../fakedata'
import { ICabinsImages } from '../../../../../model/interfaces'
import { Button } from '../../../../../components-ui'
import { useOpen, useSwiperButtons } from '../../../../../hooks'

import 'swiper/css'
import styles from './desc-left.module.scss'
import { MyLightbox } from '../../../../../components-plugin'

interface IProps {
	id: number
	images: ICabinsImages[]
	handleToggle: (id: number) => void
}

export const DescLeft: FC<IProps> = ({ id, images, handleToggle }) => {
	const [index, setIndex] = useState(-1)
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()
	const { isOpen: isOpenGallery, onOpen: onOpenGallery, onClose: onCloseGallery } = useOpen()

	
	const onShowGallery = (idx: number) => {
		setIndex(idx - 1)
	}

	return (
		<>
			<div className={styles.swiperContainer}>
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
			</div>
			<Button
				className={styles.showMore}
				onClick={() => handleToggle(id)}
			>
				Описание
			</Button>

			<MyLightbox
				isOpenGallery={isOpenGallery}
				onCloseGallery={onCloseGallery}
				images={images}
			/>
		</>
	)
}
