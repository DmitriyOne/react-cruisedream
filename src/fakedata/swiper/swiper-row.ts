import { SwiperOptions } from 'swiper'

export const paramsRow: SwiperOptions = {
	allowTouchMove: true,
	cssMode: true,
	slidesPerView: 1,
	direction: 'horizontal',
	spaceBetween: 20,
	breakpoints: {
		1180: {
			allowTouchMove: false,
			slidesPerView: 3,
			spaceBetween: 0,
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
		}
	}
}