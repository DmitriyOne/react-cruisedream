import { FC, useState } from 'react'

import { paramsFade } from '@crdr/fakedata'

import { ICabinsImages } from '@crdr/interfaces'

import { MyLightbox, MySwiper } from '@crdr/plugins'
import { Button, MyImage } from '@crdr/ui'

import styles from './desc-left.module.scss'

interface IProps {
	id: number
	images: ICabinsImages[]
	// eslint-disable-next-line no-unused-vars
	handleToggle: (id: number) => void
}

export const DescLeft: FC<IProps> = ({ id, images, handleToggle }) => {
	const [index, setIndex] = useState(-1)

	const onShowGallery = (idx: number) => {
		setIndex(idx)
	}

	return (
		<>
			<div className={styles.swiperContainer}>
				<MySwiper
					swiperClass={styles.swiper}
					params={paramsFade}
				>
					{images.map((slide, idx) =>
						<MyImage
							key={idx}
							onClick={() => onShowGallery(idx)}
							src={slide.src}
							alt={slide.alt}
						/>
					)}
				</MySwiper>
			</div>
			<Button
				className={styles.showMore}
				onClick={() => handleToggle(id)}
			>
				Описание
			</Button>

			<MyLightbox
				isOpenGallery={index >= 0}
				index={index}
				onCloseGallery={() => setIndex(-1)}
				images={images}
			/>
		</>
	)
}
