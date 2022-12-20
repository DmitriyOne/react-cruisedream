import { SwiperOptions, EffectCoverflow } from 'swiper'

import styles from './route-timeline.module.scss'

export const params: SwiperOptions = {
	loop: true,
	modules: [EffectCoverflow],
	effect: 'coverflow',
	centeredSlides: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 180,
		depth: 100,
		modifier: 1,
		slideShadows: false
	},
	slidesPerView: 'auto',
	slideActiveClass: `${styles.activeSlide}`,
	slideNextClass: `${styles.nextSlide}`,
	slidePrevClass: `${styles.prevSlide}`,
	slideVisibleClass: `${styles.visibleSlide}`,
}
