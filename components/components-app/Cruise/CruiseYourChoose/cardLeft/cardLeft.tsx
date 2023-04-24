import { dataCruiseSliderImg, paramsFade } from '@crdr/fakedata'

import { MySwiper } from '@crdr/plugins'
import { MyImage } from '@crdr/ui'

import styles from './card-left.module.scss'

export const CardLeft = () => {
	return (
		<>
			<MySwiper
				swiperClass={styles.component}
				params={paramsFade}
				buttonPosition="behind-swiper"
			>
				{dataCruiseSliderImg.map((slide, idx) =>
					<MyImage
						key={idx}
						src={slide.src}
						alt={slide.alt}
					/>
				)}
			</MySwiper>
		</>
	)
}
