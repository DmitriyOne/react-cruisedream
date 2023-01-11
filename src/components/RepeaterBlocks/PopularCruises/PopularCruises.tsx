import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params4Col, dataPopularCruises } from '../../../fakedata'
import { CRUISE_ROUTES } from '../../../constants'
import { useSwiperButtons } from '../../../hooks'

import { CardPopularCruise, Container, Heading, Button } from '../../../components'

import 'swiper/css'
import styles from './popular-cruises.module.scss'

export const PopularCruises = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container
			id="cruise"
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
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
		</Container>
	)
}
