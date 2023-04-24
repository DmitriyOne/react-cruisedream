import { FC } from 'react'

import { MyImage } from '@crdr/ui'

import styles from './banner-slider-bg.module.scss'

interface IProps {
	src: string
	alt: string
}

export const BannerSliderBg: FC<IProps> = ({ src, alt }) => {
	return (
		<div className={styles.component}>
			<MyImage
				imageClass={styles.image}
				src={src}
				alt={alt}
				isPriority
			/>
		</div>
	)
}
