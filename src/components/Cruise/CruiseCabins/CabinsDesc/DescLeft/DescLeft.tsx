import { FC } from 'react'
import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'

import { paramsFade } from '../../../../../fakedata'
import { ICabinsImages } from '../../../../../model/interfaces'
import { Button } from '../../../../../components-ui'
import { useSwiperButtons } from '../../../../../hooks'

import 'swiper/css'
import styles from './desc-left.module.scss'

interface IProps {
	id: number
	images: ICabinsImages[]
	handleToggle: (id: number) => void
}

export const DescLeft: FC<IProps> = ({ id, images, handleToggle }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

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
							<img src={slide.src} alt={slide.alt} />
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
		</>
	)
}
