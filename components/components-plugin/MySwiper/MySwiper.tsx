import { Children, FC, ReactNode } from 'react'
import classNames from 'classnames'
import { SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSwiperButtons } from '@crdr/hooks'

import { Button } from '@crdr/ui'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/grid'
import 'swiper/css/pagination'

import styles from './my-swiper.module.scss'

interface IProps {
	buttonPosition?: 'into-swiper' | 'behind-swiper'
	isArrowIndentEdge?: boolean
	isArrowShowOnlyTablet?: boolean
	arrowColor?: 'gray' | 'white' | 'blue'
	arrowSize?: 'large' | 'small'
	swiperDisplay?: 'grid'
	isSwiperIndentMobile?: boolean
	swiperAlign?: 'center' | 'stretch'
	isSlideBoxShadow?: boolean
	slideWidth?: 'w25' | 'w33'
	swiperClass?: string
	slideClass?: string
	arrowClass?: string
	arrowPrevClass?: string
	arrowNextClass?: string
	paginationClass?: string
	isPagination?: boolean
	params: SwiperOptions
	children: ReactNode
}

export const MySwiper: FC<IProps> = ({
	buttonPosition = 'into-swiper',
	isArrowIndentEdge,
	isArrowShowOnlyTablet,
	swiperAlign = 'stretch',
	arrowColor = 'white',
	arrowSize = 'small',
	swiperDisplay,
	isSwiperIndentMobile,
	isSlideBoxShadow,
	slideWidth,
	swiperClass,
	slideClass,
	arrowClass,
	arrowPrevClass,
	arrowNextClass,
	paginationClass,
	isPagination,
	params = {},
	children,
}) => {
	const { updateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	const componentClassName = classNames(swiperClass, styles.component, {
		[styles.swiperGrid]: swiperDisplay === 'grid',
		[styles.swiperBoxShadow]: isSlideBoxShadow,
		[styles.swiperAlignCenter]: swiperAlign === 'center',
		[styles.swiperAlignStretch]: swiperAlign === 'stretch',
		[styles.swiperIndentMobile]: isSwiperIndentMobile,
	})

	const slideClassName = classNames(styles.slide, slideClass, {
		[styles.slideW25]: slideWidth === 'w25',
		[styles.slideW33]: slideWidth === 'w33',
	})

	const arrowPrevClassName = classNames(
		arrowPrevClass,
		styles.swiperArrow,
		styles.prev,
		arrowClass,
		{
			[styles.arrowPrevIndentMobile]: isArrowIndentEdge,
			[styles.arrowShowOnlyTablet]: isArrowShowOnlyTablet,
			[styles.arrowWhite]: arrowColor === 'white',
			[styles.arrowGray]: arrowColor === 'gray',
			[styles.arrowBlue]: arrowColor === 'blue',
			[styles.arrowLarge]: arrowSize === 'large',
			[styles.arrowSmall]: arrowSize === 'small',
		})

	const arrowNextClassName = classNames(
		arrowNextClass,
		styles.swiperArrow,
		styles.next,
		arrowClass,
		{
			[styles.arrowNextIndentMobile]: isArrowIndentEdge,
			[styles.arrowShowOnlyTablet]: isArrowShowOnlyTablet,
			[styles.arrowWhite]: arrowColor === 'white',
			[styles.arrowGray]: arrowColor === 'gray',
			[styles.arrowBlue]: arrowColor === 'blue',
			[styles.arrowLarge]: arrowSize === 'large',
			[styles.arrowSmall]: arrowSize === 'small',
		})

	return (
		<>
			<Swiper
				className={componentClassName}
				onSwiper={updateSwiper}
				{...params}
			>
				{Children.map(children, (child, idx) => (
					<SwiperSlide
						key={idx}
						className={slideClassName}
					>
						{child}
					</SwiperSlide>
				))}

				{buttonPosition === 'into-swiper' && <>
					<Button
						className={arrowPrevClassName}
						onClick={handlerPrev}
					/>
					<Button
						className={arrowNextClassName}
						onClick={handlerNext}
					/>
				</>}
				{isPagination && <div className={paginationClass} />}
			</Swiper>
			{buttonPosition === 'behind-swiper' && <>
				<Button
					className={arrowPrevClassName}
					onClick={handlerPrev}
				/>
				<Button
					className={arrowNextClassName}
					onClick={handlerNext}
				/>
			</>}
		</>
	)
}
