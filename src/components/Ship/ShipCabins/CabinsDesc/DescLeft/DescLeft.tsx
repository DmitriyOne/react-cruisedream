import { FC } from 'react'
import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { paramsFade } from '../../../../../fakedata'

import { ICabinsImages } from '../../../../../model/interfaces'
import { Button } from '../../../../../components-ui'
import { useSwiperButtons } from '../../../../../hooks'

import 'swiper/css'
import styles from './desc-left.module.scss'

interface IProps {
	id: number
	images: ICabinsImages
}

export const DescLeft: FC<IProps> = ({ id, images }) => {

	return (
		<>
			<div className={styles.component}>
				<img src={images.src} alt={images.alt} />
			</div>
		</>
	)
}
