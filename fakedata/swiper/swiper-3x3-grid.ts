import { Grid, SwiperOptions } from 'swiper'

export const params3x3Grid: SwiperOptions = {
	slidesPerView: 'auto',
	spaceBetween: 20,
	modules: [Grid],
	breakpoints: {
		1441: {
			slidesPerView: 3,
			spaceBetween: 45,
			grid: {
				rows: 3,
				fill: 'row',
			},
		},
		1280: {
			slidesPerView: 3,
			spaceBetween: 35,
			grid: {
				rows: 3,
				fill: 'row',
			},
		},
		1180: {
			slidesPerView: 3,
			spaceBetween: 25,
			grid: {
				rows: 2,
				fill: 'row',
			},
		},
		768: {
			slidesPerView: 2,
		},
		620: {
			slidesPerView: 1.6,
		},
		300: {
			slidesPerView: 1,
		},
	},
}
