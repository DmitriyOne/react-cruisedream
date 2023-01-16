import { SwiperOptions, Navigation } from 'swiper'

export const params: SwiperOptions = {
	loop: true,
	allowTouchMove: true,
	spaceBetween: 0,
	slidesPerView: 1,
	speed: 700,
	modules: [Navigation],
}
