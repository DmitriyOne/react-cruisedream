import { FC } from 'react'
import classNames from 'classnames'

import { dataCruiseSliderImg, paramsFade } from '@crdr/fakedata'

import { MySwiper } from '@crdr/plugins'
import { MyImage } from '@crdr/ui'

import styles from './swiper-cruise-search-result.module.scss'

interface IProps {
	classImage?: string
}

export const SwiperCruiseSearchResult: FC<IProps> = ({ classImage }) => {
	return (
		<MySwiper
			params={paramsFade}
			buttonPosition="behind-swiper"
			arrowSize="large"
		>
			{dataCruiseSliderImg.map((item, idx) =>
				<span
					key={idx}
					className={classNames(classImage, styles.component)}>
					<MyImage
						src={item.src}
						alt={item.alt}
						isPriority
					/>
				</span>
			)}
		</MySwiper>
	)
}
