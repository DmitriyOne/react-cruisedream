import { SwiperOptions } from 'swiper'

export const paramsChooseDate: SwiperOptions = {
	loop: true,
	allowTouchMove: true,
	grabCursor: true,
	spaceBetween: 5,
	slidesPerView: 'auto',
	centeredSlides: true,
	speed: 700,
	slideToClickedSlide: true,
	breakpoints: {
		1441: {
			spaceBetween: 10,
			slidesPerView: 6,
		},
		1025: {
			spaceBetween: 10,
			slidesPerView: 5,
		},
		300: {
			slidesPerView: 3.4,
		},
	},
}
