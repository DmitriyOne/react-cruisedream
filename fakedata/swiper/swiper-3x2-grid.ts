import { Grid, SwiperOptions } from 'swiper'

export const params3x2Grid: SwiperOptions = {
	slidesPerView: 'auto',
	spaceBetween: 20,
	modules: [Grid],
	breakpoints: {
		1280: {
			slidesPerView: 3,
			spaceBetween: 40,
			grid: {
				rows: 2,
				fill: 'row',
			},
		},
		1024: {
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
		},
		300: {
			slidesPerView: 1,
		},
	},
}
