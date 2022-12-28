import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params3Col } from '../../../../fakedata'

import { Link } from 'react-router-dom'
import { CardBlackout, Container, Heading } from '../../../../components'
import { CRUISE_ROUTES } from '../../../../constants'
import 'swiper/css'
import styles from './countries.module.scss'
import { dataCountries } from '../../../../fakedata'

export const Countries = () => {
	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				СТРАНЫ
			</Heading>

			<Container>
				<Swiper
					className={styles.swiper}
					{...params3Col}
				>
					{dataCountries.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardBlackout card={card} />
						</SwiperSlide>
					)}
				</Swiper>
			</Container>

			<Link to={CRUISE_ROUTES.EMPTY} className="button">
				ВСЕ СТРАНЫ
			</Link>
		</Container>

	)
}
