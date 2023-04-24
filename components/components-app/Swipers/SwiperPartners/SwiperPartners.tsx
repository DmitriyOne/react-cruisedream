import { dataPartners } from '@crdr/fakedata'

import { MySwiper } from '@crdr/plugins'
import { Button, MyImage } from '@crdr/ui'

import { params } from './swiper'

import styles from './swiper-partners.module.scss'

export const SwiperPartners = () => {
	return (
		<MySwiper
			params={params}
			buttonPosition="behind-swiper"
			swiperAlign="center"
			arrowClass={styles.swiperArrow}
			arrowColor="gray"
			arrowSize="large"
			paginationClass={styles.pagination}
			isPagination
		>
			{dataPartners.map((item, idx) =>
				<Button
					key={idx}
					href={item.href}
					className={styles.link}
				>
					<MyImage
						src={item.logo.src}
						alt={item.logo.alt}
					/>
				</Button>
			)}
		</MySwiper>
	)
}
