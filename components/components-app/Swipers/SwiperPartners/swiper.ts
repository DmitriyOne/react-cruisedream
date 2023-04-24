import { Pagination, SwiperOptions } from 'swiper'

import styles from './swiper-partners.module.scss'

export const params: SwiperOptions = {
	loop: true,
	cssMode: true,
	slidesPerView: 'auto',
	spaceBetween: 25,
	modules: [Pagination],
	pagination: {
		el: `.${styles.pagination}`,
		clickable: true,
		bulletClass: `${styles.bullet}`,
		bulletActiveClass: `${styles.active}`,
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		300: {
			slidesPerView: 2,
		},
	},
}
