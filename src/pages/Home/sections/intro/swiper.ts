
import { EffectFade, SwiperOptions, Navigation } from 'swiper'

export const params: SwiperOptions = {
	loop: true,
	allowTouchMove: false,
	spaceBetween: 50,
	slidesPerView: 1,
	modules: [EffectFade, Navigation],
	effect: 'fade',
	fadeEffect: { crossFade: true },
}
