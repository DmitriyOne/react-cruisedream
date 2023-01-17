import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params } from './data/swiper'
import { DataSliderImg } from './data/data-slider'

import { useSwiperButtons } from '../../../hooks'
import { Button } from '../../../components-ui/Button'

import 'swiper/css'
import 'swiper/css/effect-fade'
import styles from './cruise-slider.module.scss'
import { FC } from 'react'

interface IProps {
	classImage?: string
	classArrow?: string
}

export const CruiseSlider: FC<IProps> = ({ classImage, classArrow }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	const imageClassName = classNames(classImage, styles.image)
	const arrowClassName = classNames(classArrow, styles.swiperArrow)
	return (
		<>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...params}
			>

				{DataSliderImg.map((img, idx) =>
					<SwiperSlide key={idx}>
						<span className={imageClassName}>
							<img
								src={img}
								alt="Cruise 1"
							/>
						</span>
					</SwiperSlide>
				)}

			</Swiper>
			<Button
				className={classNames(arrowClassName, styles.prev)}
				onClick={handlerPrev}
			/>
			<Button
				className={classNames(arrowClassName, styles.next)}
				onClick={handlerNext}
			/>
		</>
	)
}
