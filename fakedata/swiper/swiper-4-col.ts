import { SwiperOptions } from 'swiper'

export const params4Col: SwiperOptions = {
	slidesPerView: 'auto',
	direction: 'horizontal',
	spaceBetween: 20,
	breakpoints: {
		1280: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		620: {
			slidesPerView: 1.6,
		},
		300: {
			slidesPerView: 1,
		},
	},
}
