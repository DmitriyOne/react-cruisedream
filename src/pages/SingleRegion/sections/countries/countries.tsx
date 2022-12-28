import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params3Col } from '../../../../fakedata'

import { Link } from 'react-router-dom'
import { Button, CardBlackout, Container, Heading } from '../../../../components'
import { CRUISE_ROUTES } from '../../../../constants'
import 'swiper/css'
import styles from './countries.module.scss'
import { dataCountries } from '../../../../fakedata'
import { useSwiperButtons } from '../../../../hooks'

export const Countries = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container
			id="countries"
			width="full"
			direction="column"
			className={classNames(styles.component, 'pb-section')}
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

			<Link to={CRUISE_ROUTES.EMPTY} className="button">
				ВСЕ СТРАНЫ
			</Link>
		</Container>

	)
}
