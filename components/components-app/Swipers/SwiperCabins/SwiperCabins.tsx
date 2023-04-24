import { FC, useState } from 'react'

import { paramsFade } from '@crdr/fakedata'

import { ICabinsImages } from '@crdr/interfaces'

import { MyLightbox, MySwiper } from '@crdr/plugins'
import { MyImage } from '@crdr/ui'

import styles from './swiper-cabins.module.scss'

interface IProps {
	images: ICabinsImages[]
}

export const SwiperCabins: FC<IProps> = ({ images }) => {
	const [index, setIndex] = useState(-1)

	const onShowGallery = (idx: number) => {
		setIndex(idx - 1)
	}

	return (
		<>
			<MySwiper
				params={paramsFade}
				swiperClass={styles.component}
				buttonPosition="behind-swiper"
			>
				{images.map((slide, idx) =>
					<MyImage
						key={idx}
						onClick={() => onShowGallery(slide.id)}
						src={slide.src}
						alt={slide.alt}
					/>
				)}
			</MySwiper>

			<MyLightbox
				isOpenGallery={index >= 0}
				index={index}
				onCloseGallery={() => setIndex(-1)}
				images={images}
			/>
		</>
	)
}
