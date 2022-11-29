import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'
import { useSwiperButtons } from '../../../../hooks'

import { IntroData } from '../data'

import { Button, Container } from '../../../../components'
import { IntroContent } from './content/content'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import styles from './intro.module.scss'

export const Intro = () => {
	const { navPrevButton, navNextButton, onBeforeInit } = useSwiperButtons()

	return (
		<Container
			width="full"
			className={styles.component}
		>
			<Swiper
				className={styles.swiper}
				navigation={{
					prevEl: navPrevButton.current,
					nextEl: navNextButton.current,
				}}
				onBeforeInit={onBeforeInit}
				{...params}
			>
				{IntroData.map((slider, idx) =>
					<SwiperSlide
						className={styles.slide}
						key={idx}
					>
						<div className={styles.imageWrapper}>
							<img
								className={styles.image}
								src={slider.src}
								alt={slider.alt}
							/>
						</div>
						<Container
							width="containerXl"
							className={styles.container}
						>
							<IntroContent
								title={slider.title}
								href={slider.href}
								variant={slider.textPosition}
								discount={slider.discount}
							/>
						</Container>
					</SwiperSlide>
				)}
				<Button
					className={classNames(styles.swiperArrow, styles.prev)}
					ref={navPrevButton}
				/>
				<Button
					className={classNames(styles.swiperArrow, styles.next)}
					ref={navNextButton}
				/>
			</Swiper>
		</Container>
	)
}
