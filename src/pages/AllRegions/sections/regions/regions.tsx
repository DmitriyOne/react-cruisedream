import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { paramsGrid } from '../../../../fakedata'

import { CardBlackout, Container, Heading } from '../../../../components'
import { CRUISE_ROUTES } from '../../../../constants'
import { dataRegionsCard } from '../../../../fakedata/data-regions-card'

import 'swiper/css'
import 'swiper/css/grid'
import styles from './regions.module.scss'

export const Regions = () => {
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
					{...paramsGrid}
				>
					{dataRegionsCard.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardBlackout card={card} />
						</SwiperSlide>
					)}
				</Swiper>
			</Container>

			<Link to={CRUISE_ROUTES.SHIPS} className="button">
				ВСЕ РЕГИОНЫ
			</Link>
		</Container>
	)
}