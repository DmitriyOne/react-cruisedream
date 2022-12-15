import { SwiperOptions } from 'swiper'

export const params: SwiperOptions = {
	allowTouchMove: true,
	spaceBetween: 5,
	slidesPerView: 2.5,
	speed: 700,
	breakpoints: {
		480: {
			slidesPerView: 'auto',
			spaceBetween: 20,
		},
	}
}
