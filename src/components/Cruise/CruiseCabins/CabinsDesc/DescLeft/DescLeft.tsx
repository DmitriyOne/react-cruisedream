import { FC } from 'react'
import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from '../../data/swiper'

import { ICabinsImages } from '../../../../../model/interfaces'
import { Button } from '../../../../../components'
import { useSwiperButtons } from '../../../../../hooks'

import 'swiper/css'
import styles from './desc-left.module.scss'

interface IProps {
	images: ICabinsImages[]
}

export const DescLeft: FC<IProps> = ({ images }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<>
			<div className={styles.swiperContainer}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params}
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
			<Button className={styles.showMore}>
				Описание
			</Button>
		</>
	)
}
