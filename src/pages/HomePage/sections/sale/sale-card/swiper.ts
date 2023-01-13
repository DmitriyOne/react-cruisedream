import { SwiperOptions } from 'swiper'

export const params: SwiperOptions = {
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1280: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3.3,
		},
		768: {
			slidesPerView: 2.5,
		},
		620: {
			slidesPerView: 2.2,
		},
		520: {
			slidesPerView: 1.7,
		}
	}
}
