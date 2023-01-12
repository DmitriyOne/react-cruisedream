import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'

import { dataSale } from '../../../../../fakedata'

import { useSwiperButtons } from '../../../../../hooks'
import { Heading, Discount, Button } from '../../../../../components'

import styles from './sale-card.module.scss'
import classNames from 'classnames'

export const SaleCard = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Swiper
			className={styles.swiper}
			onSwiper={upDateSwiper}
			{...params}
		>
			{dataSale.map((item, idx) => {
				const isSale = item.discount
				return (
					<SwiperSlide
						className={styles.slide}
						key={idx}
					>
						<Link
							to={item.href}
							className={styles.link}
						>
							<div className={styles.cardImageWrapper} >
								<img
									className={styles.cardImage}
									src={item.src}
									alt={item.alt}
								/>
							</div>
							<Heading as="h4" className={styles.cardTitle} align="center">
								{item.title}
							</Heading>
							<p className={styles.cardDescription}>
								{item.description}
							</p>
							{isSale &&
								<Discount
									percentage={item.discountPercentage}
									className={styles.discount}
								/>}
						</Link>
					</SwiperSlide>
				)
			}
			)}
			<Button
				className={classNames(styles.swiperArrow, styles.prev)}
				onClick={handlerPrev}
			/>
			<Button
				className={classNames(styles.swiperArrow, styles.next)}
				onClick={handlerNext}
			/>
		</Swiper >
	)
}
