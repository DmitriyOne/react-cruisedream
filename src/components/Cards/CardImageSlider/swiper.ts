import { SwiperOptions } from 'swiper'

export const params: SwiperOptions = {
	slidesPerView: 1.5,
	loop: true,
	direction: 'horizontal',
	initialSlide: 1,
	centeredSlides: true,
	spaceBetween: 5,
	breakpoints: {
		1280: {
			slidesPerView: 3,
		},
		1025: {
			slidesPerView: 2,
		}
	}
}
