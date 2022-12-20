import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'

import { params } from './swiper'

import img1Src from './images/1.jpg'
import img2Src from './images/2.jpg'

import { useSwiperButtons, useWindowSize } from '../../../../../hooks'
import { Button } from '../../../../../components'

import { TimelineItem } from './timelineItem/timelineItem'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import styles from './route-timeline.module.scss'
import { useEffect, useState } from 'react'

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
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()
	const { isMobile } = useWindowSize()

	return (
		<>
			<Button
				className={classNames(styles.swiperArrow, styles.prev)}
				onClick={handlerPrev}
			/>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
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
		</>
	)
}
