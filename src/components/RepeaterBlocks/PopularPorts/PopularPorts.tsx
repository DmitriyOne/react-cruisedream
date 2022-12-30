import { FC } from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ICard } from '../../../model/interfaces'
import { CardWithRoute, Container, Heading } from '../../../components'
import { params4Col, } from '../../../fakedata'

import 'swiper/css'
import styles from './popular-ports.module.scss'

interface IProps {
	title: string
	cards: ICard[]
}

export const PopularPorts: FC<IProps> = ({ ...content }) => {
	return (
		<Container
			id="ports"
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className={classNames(styles.title, 'title-secondary')}>
				{content.title}
			</Heading>

			<Container>
				<Swiper
					className={styles.swiper}
					{...params4Col}
				>
					{content.cards.map(card =>
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
