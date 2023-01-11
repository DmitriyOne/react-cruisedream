/* eslint-disable no-unused-vars */
import classNames from 'classnames'
import { FC, ReactNode } from 'react'

import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSwiperButtons } from '../../hooks'
import { Button } from '../../components'

import styles from './my-swiper.module.scss'

enum EArrowColor {
	white = 'white',
	gray = 'gray'
}

interface IProps {
	params: SwiperOptions
	array: any[]
	children: ReactNode
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
	isNavigate,
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
						{array.map(card =>
							<SwiperSlide key={card.id} className={slideClassName}>
								{children}
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
