import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CardWithRoute, Container, Heading } from '../../../../components'
import { params4Col, dataPopularPort } from '../../../../fakedata'
import 'swiper/css'
import styles from './popular-port.module.scss'

export const PopularPort = () => {
	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className={classNames(styles.title, 'title-secondary')}>
				ПОПУЛЯРНЫЕ порты СРЕДИЗЕМНОГО МОРЯ
			</Heading>

			<Container>
				<Swiper
					className={styles.swiper}
					{...params4Col}
				>
					{dataPopularPort.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardWithRoute
								{...card}
								isSubtitleIndent
								isSubtitleJustify
							/>
						</SwiperSlide>
					)}
				</Swiper>
			</Container>
		</Container>
	)
}
