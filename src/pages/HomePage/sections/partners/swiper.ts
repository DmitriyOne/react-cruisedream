import { Pagination, SwiperOptions, Navigation } from 'swiper'

import styles from './partners.module.scss'

export const params: SwiperOptions = {
	allowTouchMove: true,
	loop: true,
	cssMode: true,
	slidesPerView: 2,
	spaceBetween: 25,
	modules: [Pagination, Navigation],
	pagination: {
		el: `.${styles.pagination}`,
		clickable: true,
		bulletClass: `${styles.bullet}`,
		bulletActiveClass: `${styles.active}`
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
		}
	}
}
