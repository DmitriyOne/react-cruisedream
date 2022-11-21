import { useRef } from 'react'
import SwiperCore, { EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'

import { Button, Container } from '../../../../components'
import { IntroContent } from './content/content'
import { Background } from './background/background'
import { SwiperIntro } from './swiper-intro'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import styles from './intro.module.scss'

export const Intro = () => {
	const navPrevButton = useRef<HTMLButtonElement>(null)
	const navNextButton = useRef<HTMLButtonElement>(null)

	const onBeforeInit = (Swiper: SwiperCore): void => {
		if (typeof Swiper.params.navigation !== 'boolean') {
			const navigation = Swiper.params.navigation
			navigation!.prevEl = navPrevButton.current
			navigation!.nextEl = navNextButton.current
		}
	}

	return (
		<Container
			width="full"
			className={styles.component}
		>
			<Swiper
				loop={true}
				className={styles.swiper}
				spaceBetween={50}
				slidesPerView={1}
				navigation={{
					prevEl: navPrevButton.current,
					nextEl: navNextButton.current,
				}}
				onBeforeInit={onBeforeInit}
				modules={[EffectFade, Navigation]}
				effect={'fade'}
				fadeEffect={{ crossFade: true }}
			>
				{SwiperIntro.map((slider, idx) =>
					<SwiperSlide
						className={styles.slide}
						key={idx}
					>
						<Background src={slider.src} alt={slider.alt} />
						<Container className={styles.container}>
							<IntroContent title={slider.title} href={slider.href} />
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
