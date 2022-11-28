import { SwiperOptions } from 'swiper'

export const params: SwiperOptions = {
	slidesPerView: 1.05,
	spaceBetween: 15,
	breakpoints: {
		1280: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3.3,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 2.5,
			spaceBetween: 30,
		},
		620: {
			slidesPerView: 2.2,
			spaceBetween: 20,
		},
		520: {
			slidesPerView: 1.7,
		}
	}
}
