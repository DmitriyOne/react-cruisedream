import { Grid, SwiperOptions } from 'swiper'

export const params: SwiperOptions = {
	slidesPerView: 1.05,
	spaceBetween: 15,
	modules: [Grid],
	breakpoints: {
		1280: {
			slidesPerView: 3,
			spaceBetween: 40,
			grid: {
				rows: 2,
				fill: 'row'
			},
		},
		1024: {
			spaceBetween: 20,
			slidesPerView: 2.6,
		},
		990: {
			slidesPerView: 2.6,
		},
		768: {
			slidesPerView: 2.2,
		},
		620: {
			slidesPerView: 1.6,
		}
	}
}
