import { SwiperOptions } from 'swiper'

export const paramsRow4PerColumn: SwiperOptions = {
	allowTouchMove: true,
	slidesPerView: 1,
	direction: 'horizontal',
	spaceBetween: 20,
	breakpoints: {
		1280: {
			allowTouchMove: false,
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1180: {
			allowTouchMove: false,
			slidesPerView: 3,
			spaceBetween: 20,
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
