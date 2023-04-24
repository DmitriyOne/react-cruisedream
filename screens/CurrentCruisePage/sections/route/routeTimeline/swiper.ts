import { EffectCoverflow,SwiperOptions } from 'swiper'

export const params: SwiperOptions = {
	loop: true,
	slidesPerView: 2,
	modules: [EffectCoverflow],
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slideToClickedSlide: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 180,
		depth: 100,
		modifier: 1,
		slideShadows: false,
	},
}

