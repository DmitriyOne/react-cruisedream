import { FC } from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSwiperButtons } from '../../../hooks'
import { ICard } from '../../../model/interfaces'
import { CardButtonHover, Container, Heading, Button } from '../../../components'
import { params4Col, } from '../../../fakedata'

import 'swiper/css'
import styles from './popular-ports.module.scss'

interface IProps {
	title: string
	cards: ICard[]
}

export const PopularPorts: FC<IProps> = ({ ...content }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container
			id="ports"
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section')}
			tag="section"
		>
			<Heading as="h2" className={classNames(styles.title, 'title-secondary')}>
				{content.title}
			</Heading>

			<Container className={styles.container}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params4Col}
				>
					{content.cards.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardButtonHover
								isSubtitleIndent
								isSubtitleJustify
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
