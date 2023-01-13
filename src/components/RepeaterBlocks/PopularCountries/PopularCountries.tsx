import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

import { params3Col, dataCountries } from '../../../fakedata'
import { useSwiperButtons } from '../../../hooks'
import { CRUISE_ROUTES } from '../../../constants'

import { Button, CardBlackout, Container, Heading } from '../../../components'

import 'swiper/css'
import styles from './popular-countries.module.scss'

export const PopularCountries = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container
			id="countries"
			width="full"
			direction="column"
			className={classNames('pb-section', 'pt-section', styles.component)}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				СТРАНЫ
			</Heading>

			<Container className={styles.container}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params3Col}
				>
					{dataCountries.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardBlackout card={card} />
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

			<Link to={CRUISE_ROUTES.PORTS} className="button">
				ВСЕ СТРАНЫ
			</Link>
		</Container>

	)
}
