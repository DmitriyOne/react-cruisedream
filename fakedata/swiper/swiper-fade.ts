import { EffectFade, SwiperOptions } from 'swiper'

export const paramsFade: SwiperOptions = {
	loop: true,
	allowTouchMove: true,
	slidesPerView: 'auto',
	spaceBetween: 0,
	speed: 700,
	modules: [EffectFade],
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
}
