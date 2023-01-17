import { EffectFade, SwiperOptions } from 'swiper'

import cabinsImage1Src from '../../../../assets/images/cabins/cabins-1.jpg'
import cabinsImage2Src from '../../../../assets/images/ship/1.jpg'

export const swiperImages = [
	{ src: cabinsImage1Src, alt: 'Cool cabin' },
	{ src: cabinsImage2Src, alt: 'Very cool cabin' }
]

export const params: SwiperOptions = {
	loop: true,
	allowTouchMove: true,
	spaceBetween: 0,
	slidesPerView: 1,
	speed: 700,
	effect: 'fade',
	modules: [EffectFade]
}
