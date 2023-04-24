import { FC } from 'react'

import { paramsCenterSlide } from '@crdr/fakedata'

import { IImage } from '@crdr/interfaces'

import { MySwiper } from '@crdr/plugins'
import { MyImage } from '@crdr/ui'

import styles from './swiper-advices-gallery.module.scss'

interface IProps {
	images: IImage[]
}

export const SwiperAdvicesGallery: FC<IProps> = ({ images }) => {
	return (
		<MySwiper
			slideClass={styles.component}
			params={paramsCenterSlide}
			isArrowShowOnlyTablet
		>
			{images.map((item, idx) =>
				<MyImage
					key={idx}
					src={item.src}
					alt={item.alt}
				/>
			)}
		</MySwiper>
	)
}
