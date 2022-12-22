import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'

import img1Src from './images/1.jpg'
import img2Src from './images/2.jpg'

import { useSwiperButtons, useSwiperChangeEffect } from '../../../../../hooks'
import { Button } from '../../../../../components'
import { TimelineItem } from './timelineItem/timelineItem'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import styles from './route-timeline.module.scss'

const timeline = [
	{
		port: 'Сохна 0',
		image: img1Src
	},
	{
		port: 'Акаба 1',
		image: img2Src
	},
	{
		port: 'Сохна 2',
		image: img1Src
	},
	{
		port: 'Сохна 3',
		image: img2Src
	},
	{
		port: 'Сохна 4',
		image: img1Src
	},
	{
		port: 'Сохна 5',
		image: img2Src
	},
	{
		port: 'Сохна 6',
		image: img1Src
	}
]

export const RouteTimeline = (): JSX.Element => {
	const { handlerNext, handlerPrev, upDateSwiper } = useSwiperButtons()
	const { onBeforeInit } = useSwiperChangeEffect()

	return (
		<div className={styles.component}>
			<Button
				className={classNames(styles.swiperArrow, styles.prev)}
				onClick={handlerPrev}
			/>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				onBeforeInit={onBeforeInit}
				{...params}
			>
				{timeline.map((slide, idx) =>
					<SwiperSlide key={idx} className={styles.slide}>
						<TimelineItem
							image={slide.image}
							port={slide.port}
						/>
					</SwiperSlide>
				)}
			</Swiper>
			<Button
				className={classNames(styles.swiperArrow, styles.next)}
				onClick={handlerNext}
			/>
		</div>
	)
}
