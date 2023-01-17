import { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { dataSale, paramsRow4PerColumn } from '../../../fakedata'
import { useSwiperButtons } from '../../.././hooks'
import { CRUISE_ROUTES } from '../../../constants'

import { Heading } from '../../../components-ui/Headings'
import { Button } from '../../../components-ui/Button'
import { CardDiscount } from '../../Cards'

import styles from './discount-cards-swiper.module.scss'

interface IProps {
	title?: string
	isShowAllCards?: boolean
	isShowButtonAllDiscounts?: boolean
	isEveryCardButton?: boolean
}

export const DiscountCardsSwiper: FC<IProps> = ({
	title = 'АКЦИИ',
	isShowAllCards = false,
	isShowButtonAllDiscounts = true,
	isEveryCardButton = false
}) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	const swiperClass = classNames(styles.swiper, {
		[styles.grid]: isShowAllCards
	})
	const sliderClass = classNames(styles.slide, {
		[styles.w25]: isShowAllCards
	})
	const params = isShowAllCards ? paramsRow4PerColumn : paramsRow4PerColumn
	return (
		<>
			<Heading as="h2" className="title-secondary">
				{title}
			</Heading>
			<Swiper
				className={swiperClass}
				onSwiper={upDateSwiper}
				{...params}
			>
				{isShowAllCards
					?
					<>
						{dataSale.map((card, idx) =>
							<SwiperSlide
								className={sliderClass}
								key={idx}
							>
								<CardDiscount
									isEveryCardButton={isEveryCardButton}
									{...card}
								/>
							</SwiperSlide>
						)}
					</>
					:
					<>
						{dataSale.slice(0, 4).map((card, idx) =>
							<SwiperSlide
								className={sliderClass}
								key={idx}
							>
								<CardDiscount
									isEveryCardButton={isEveryCardButton}
									{...card}
								/>
							</SwiperSlide>
						)}
					</>
				}
				<Button
					className={classNames(styles.swiperArrow, styles.prev)}
					onClick={handlerPrev}
				/>
				<Button
					className={classNames(styles.swiperArrow, styles.next)}
					onClick={handlerNext}
				/>
			</Swiper>
			{isShowButtonAllDiscounts &&
				<Link
					className="button"
					to={CRUISE_ROUTES.DISCOUNTS}
				>
					ВСЕ АКЦИИ
				</Link>
			}
		</>
	)
}
