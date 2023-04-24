import dynamic from 'next/dynamic'
import classNames from 'classnames'
import { SwiperSlide } from 'swiper/react'

import { useSwiperButtons, useSwiperChangeEffect } from '@crdr/hooks'

import { Button } from '@crdr/ui'

import { DataRouteTimeline } from '../data/route-timeline'

import { TimelineItem } from './timelineItem/timelineItem'
import { params } from './swiper'

import 'swiper/css/effect-coverflow'

import styles from './route-timeline.module.scss'

const Swiper = dynamic(() => import('swiper/react').then((module) => module.Swiper), { ssr: false })

export const RouteTimeline = () => {
	const { handlerNext, handlerPrev, updateSwiper } = useSwiperButtons()
	const { onBeforeInit } = useSwiperChangeEffect()

	return (
		<div className={styles.component}>
			<Button
				className={classNames(styles.swiperArrow, styles.prev)}
				onClick={handlerPrev}
			/>
			<Swiper
				className={classNames(styles.swiper, 'my-swiper-coverflow')}
				onSwiper={updateSwiper}
				onBeforeInit={onBeforeInit}
				{...params}
			>
				{DataRouteTimeline.map((slide, idx) =>
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
		</div >
	)
}
