import { Navigation, SwiperOptions } from 'swiper'

export const params: SwiperOptions = {
	allowTouchMove: true,
	spaceBetween: 0,
	slidesPerView: 'auto',
	speed: 700,
	modules: [Navigation],
	breakpoints: {
		768: {
			allowTouchMove: false,
			loop: false,
		},
		300: {
			slidesPerView: 1,
		},
	},
}
