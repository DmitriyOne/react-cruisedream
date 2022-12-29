import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import { params3x2Grid, dataRegionsCard } from '../../../fakedata'
import { CRUISE_ROUTES } from '../../../constants'

import { CardBlackout, Container, Heading } from '../../../components'

import 'swiper/css'
import 'swiper/css/grid'
import styles from './regions-cards.module.scss'

export const RegionsCards = () => {
	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				РЕГИОНЫ
			</Heading>

			<Container>
				<Swiper
					className={styles.swiper}
					{...params3x2Grid}
				>
					{dataRegionsCard.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardBlackout card={card} />
						</SwiperSlide>
					)}
				</Swiper>
			</Container>

			<Link to={CRUISE_ROUTES.REGIONS} className="button">
				ВСЕ РЕГИОНЫ
			</Link>
		</Container>
	)
}
