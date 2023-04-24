import { dataShipSlider, paramsFade } from '@crdr/fakedata'

import { MySwiper } from '@crdr/plugins'
import { MyImage } from '@crdr/ui'

import styles from './swiper-ship.module.scss'

export const SwiperShip = () => {
	return (
		<div className={styles.component}>
			<MySwiper
				params={paramsFade}
				buttonPosition="behind-swiper"
				arrowSize="large"
			>
				{dataShipSlider.map((item, idx) =>
					<MyImage
						key={idx}
						src={item.src}
						alt={item.alt}
					/>
				)}
			</MySwiper>
		</div>
	)
}
