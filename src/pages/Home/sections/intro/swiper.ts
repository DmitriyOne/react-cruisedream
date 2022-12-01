
import { SwiperOptions, Navigation, EffectFade } from 'swiper'

export const params: SwiperOptions = {
	loop: true,
	allowTouchMove: true,
	spaceBetween: 0,
	slidesPerView: 1,
	speed: 700,
	modules: [EffectFade, Navigation],
	effect: 'fade',
	fadeEffect: { 
		crossFade: true,
	},
	breakpoints: {
		1024: {
			allowTouchMove: false
		}
	}
}
