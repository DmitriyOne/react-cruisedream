import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'
import { useSwiperButtons } from '../../../hooks'

import { dataIntro } from '../../../fakedata'
import { Button, Container } from '../../../components-ui'
import { IntroHomeContent } from './IntroHomeContent/IntroHomeContent'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import styles from './intro-home.module.scss'

export const IntroHome = () => {
	const { navPrevButton, navNextButton, onBeforeInit } = useSwiperButtons()

	return (
		<Container
			width="full"
			align="stretch"
			className={styles.component}
			tag="section"
		>
			<Swiper
				className={styles.swiper}
				onBeforeInit={onBeforeInit}
				navigation={{
					prevEl: navPrevButton.current,
					nextEl: navNextButton.current,
				}}
				{...params}
			>
				{dataIntro.map((slider, idx) =>
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
							<IntroHomeContent
								title={slider.title}
								href={slider.href}
								variant={slider.textPosition}
								discount={slider.discount}
							/>
						</Container>
					</SwiperSlide>
				)}
				<Button
					ref={navPrevButton}
					className={classNames(styles.swiperArrow, styles.prev)}
				/>
				<Button
					ref={navNextButton}
					className={classNames(styles.swiperArrow, styles.next)}
				/>
			</Swiper>
		</Container>
	)
}
