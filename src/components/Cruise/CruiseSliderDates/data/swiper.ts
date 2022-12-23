import { SwiperOptions } from 'swiper'

import styles from '../ChooseSlider/choose-slider.module.scss'

export const params: SwiperOptions = {
	loop: true,
	allowTouchMove: true,
	grabCursor: true,
	spaceBetween: 5,
	slidesPerView: 3.4,
	centeredSlides: true,
	speed: 700,
	slideActiveClass: `${styles.activeSlide}`,
	slideNextClass: `${styles.nextSlide}`,
	slidePrevClass: `${styles.prevSlide}`,
	slideVisibleClass: `${styles.visibleSlide}`,
	breakpoints: {
		1441: {
			spaceBetween: 10,
			slidesPerView: 6,
		},
		1025: {
			spaceBetween: 10,
			slidesPerView: 5,
		},
	}
}
