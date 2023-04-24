import { SwiperOptions } from 'swiper'

export const params3Col: SwiperOptions = {
	slidesPerView: 'auto',
	direction: 'horizontal',
	spaceBetween: 20,
	breakpoints: {
		1280: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 2.6,
		},
		990: {
			slidesPerView: 2.6,
		},
		768: {
			slidesPerView: 2.2,
		},
		620: {
			slidesPerView: 1.6,
		},
		300: {
			slidesPerView: 1,
		},
	},
}
