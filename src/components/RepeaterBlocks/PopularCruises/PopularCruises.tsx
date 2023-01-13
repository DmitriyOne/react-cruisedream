import { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params4Col, dataPopularCruises } from '../../../fakedata'
import { CRUISE_ROUTES } from '../../../constants'
import { useSwiperButtons } from '../../../hooks'

import { CardPopularCruise, Container, Heading, Button } from '../../../components'

import 'swiper/css'
import styles from './popular-cruises.module.scss'

interface IProps {
	componentClass?: string
	isBottomLink?: boolean
}

export const PopularCruises: FC<IProps> = ({ componentClass, isBottomLink = false }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container
			id="cruise"
			width="full"
			direction="column"
			className={classNames(componentClass, styles.component,)}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				ПОПУЛЯРНЫЕ КРУИЗЫ
			</Heading>

			<Container className={styles.container}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params4Col}
				>
					{dataPopularCruises.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardPopularCruise
								{...card}
							/>
						</SwiperSlide>
					)}
				</Swiper>
				<Button
					className={classNames(styles.swiperArrow, styles.prev)}
					onClick={handlerPrev}
				/>
				<Button
					className={classNames(styles.swiperArrow, styles.next)}
					onClick={handlerNext}
				/>
			</Container>
			{isBottomLink &&
				<Link to={CRUISE_ROUTES.SEARCH} className="button">
					ВСЕ КРУИЗЫ
				</Link>
			}
		</Container>
	)
}
