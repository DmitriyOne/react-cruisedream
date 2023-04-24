import { SwiperOptions } from 'swiper'

export const paramsCenterSlide: SwiperOptions = {
	slidesPerView: 'auto',
	loop: true,
	direction: 'horizontal',
	grabCursor: true,
	initialSlide: 1,
	centeredSlides: true,
	spaceBetween: 2,
	breakpoints: {
		1280: {
			slidesPerView: 3,
			spaceBetween: 5,
		},
		1025: {
			slidesPerView: 2,
		},
		300: {
			slidesPerView: 1.3,
		},
	},
}
