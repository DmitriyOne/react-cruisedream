import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CardPopularCruise, Container, Heading } from '../../../../components'
import { params4Col } from '../../../../fakedata'
import { dataPopularCruises } from '../../../../fakedata/data-popular-cruises'
import 'swiper/css'
import styles from './popular-cruises.module.scss'

export const PopularCruises = () => {
	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				ПОПУЛЯРНЫЕ КРУИЗЫ
			</Heading>

			<Container>
				<Swiper
					className={styles.swiper}
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
			</Container>
		</Container>
	)
}
