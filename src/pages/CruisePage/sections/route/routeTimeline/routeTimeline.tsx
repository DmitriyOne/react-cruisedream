import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'

import { useSwiperButtons, useSwiperChangeEffect } from '../../../../../hooks'
import { Button } from '../../../../../components'
import { TimelineItem } from './timelineItem/timelineItem'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import styles from './route-timeline.module.scss'
import { DataRouteTimeline } from '../data/route-timeline'

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
		</div>
	)
}
