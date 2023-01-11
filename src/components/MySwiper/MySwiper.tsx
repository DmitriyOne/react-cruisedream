/* eslint-disable no-unused-vars */
import classNames from 'classnames'
import { FC } from 'react'

import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IntroHomeBanner, Partners, SaleHome } from '../Sliders'
import { useSwiperButtons } from '../../hooks'
import { Button, CardBlackout } from '../../components'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import styles from './my-swiper.module.scss'

enum EArrowColor {
	white = 'white',
	gray = 'gray'
}

enum EChildrenType {
	introHome = 'intro-home',
	saleHome = 'sale-home',
	partners = 'partners',
	cardBlackout = 'card-blackout',
}

interface IProps {
	params: SwiperOptions
	array: any[]
	children: keyof typeof EChildrenType
	isNavigate?: boolean
	isPagination?: boolean
	isSlideBoxShadow?: boolean
	isShowAll?: boolean
	isSliceArray?: boolean
	sliceEndIdx?: number
	componentClass?: string
	swiperClass?: string
	slideClass?: string
	buttonClass?: string
	paginationClass?: string
	arrowColor?: keyof typeof EArrowColor
}

export const MySwiper: FC<IProps> = ({
	params,
	array,
	children,
	isNavigate = true,
	isPagination = false,
	isSlideBoxShadow = false,
	isShowAll,
	isSliceArray = false,
	sliceEndIdx,
	componentClass,
	swiperClass,
	slideClass,
	buttonClass,
	paginationClass,
	arrowColor = 'white'
}) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	const componentClassName = classNames(componentClass, styles.component)
	const swiperClassName = classNames(swiperClass, styles.swiper, {
		[styles.swiperPadding]: isSlideBoxShadow,
	})
	const slideClassName = classNames(slideClass, styles.slide)
	const buttonClassName = classNames(buttonClass, styles.button, {
		[styles.arrowWhite]: arrowColor === 'white',
		[styles.arrowGray]: arrowColor === 'gray'
	})
	const paginationClassName = classNames(paginationClass, styles.pagination)
	return (
		<>
			{isNavigate &&
				<div className={componentClassName}>
					<Swiper
						className={swiperClassName}
						onSwiper={upDateSwiper}
						{...params}
					>
						{array.map((item, idx) =>
							<SwiperSlide key={idx} className={slideClassName}>
								{children === 'introHome' &&
									<IntroHomeBanner {...item}
									/>
								}
								{children === 'saleHome' &&
									<SaleHome {...item}
									/>
								}
								{children === 'partners' &&
									<Partners {...item} />
								}
							</SwiperSlide>
						)}
						{isPagination && <div className={paginationClassName} />}
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
			}

			{isSliceArray &&
				<div className={componentClassName}>
					<Swiper
						className={swiperClassName}
						onSwiper={upDateSwiper}
						{...params}
					>
						{isShowAll
							?
							<>
								{array.map((item, idx) =>
									<SwiperSlide key={idx} className={slideClassName}>
										{children === 'cardBlackout' && <CardBlackout card={item} />}
									</SwiperSlide>
								)}
							</>
							:
							<>
								{array.slice(0, sliceEndIdx).map((item, idx) =>
									<SwiperSlide key={idx} className={slideClassName}>
										{children === 'cardBlackout' && <CardBlackout card={item} />}
									</SwiperSlide>
								)}
							</>
						}

						{array.map((item, idx) =>
							<SwiperSlide key={idx} className={slideClassName}>
								{children === 'introHome' &&
									<IntroHomeBanner {...item}
									/>
								}
								{children === 'saleHome' &&
									<SaleHome {...item}
									/>
								}
								{children === 'partners' &&
									<Partners {...item} />
								}
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
			}

		</>
	)
}
