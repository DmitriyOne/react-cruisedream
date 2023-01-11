/* eslint-disable no-unused-vars */
import classNames from 'classnames'
import { FC, ReactNode } from 'react'

import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IntroHomeBanner } from '../Sliders/IntroHomeBanner/IntroHomeBanner'
import { useSwiperButtons } from '../../hooks'
import { Button } from '../../components'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import styles from './my-swiper.module.scss'

enum EArrowColor {
	white = 'white',
	gray = 'gray'
}

enum EChildrenType {
	introHome = 'intro-home'
}

interface IProps {
	params: SwiperOptions
	array: any[]
	children: keyof typeof EChildrenType
	isNavigate?: boolean
	isSlideBoxShadow?: boolean
	swiperClass?: string
	slideClass?: string
	buttonClass?: string
	arrowColor?: keyof typeof EArrowColor
}

export const MySwiper: FC<IProps> = ({
	params,
	array,
	children,
	isNavigate = true,
	isSlideBoxShadow,
	swiperClass,
	slideClass,
	buttonClass,
	arrowColor = 'white'
}) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	const swiperClassName = classNames(swiperClass, styles.swiper, {
		[styles.swiperPadding]: isSlideBoxShadow,
	})
	const slideClassName = classNames(slideClass, styles.slide)
	const buttonClassName = classNames(buttonClass, styles.button, {
		[styles.arrowWhite]: arrowColor === 'white',
		[styles.arrowGray]: arrowColor === 'gray'
	})
	return (
		<>
			{isNavigate
				?
				<div className={styles.component}>
					<Swiper
						className={swiperClassName}
						onSwiper={upDateSwiper}
						{...params}
					>
						{array.map((item, idx) =>
							<SwiperSlide key={idx} className={slideClassName}>

								{children === 'introHome' &&
									<IntroHomeBanner {...item}
									/>}






							</SwiperSlide>
						)}
					</Swiper>
					<Button
						className={classNames(buttonClassName, styles.prev)}
						onClick={handlerPrev}
					/>
					<Button
						className={classNames(buttonClassName, styles.next)}
						onClick={handlerNext}
					/>
				</div>
				:
				<></>
			}
		</>
	)
}
