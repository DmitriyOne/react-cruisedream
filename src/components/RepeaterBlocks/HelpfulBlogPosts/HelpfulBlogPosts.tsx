import { FC } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params3Col } from '../../../fakedata'
import { useSwiperButtons } from '../../../hooks'
import { CRUISE_ROUTES } from '../../../constants'
import { ICard } from '../../../model/interfaces'

import { Button, CardBlackout, Container, Heading } from '../../../components'

import 'swiper/css'
import styles from './helpful-blog-posts.module.scss'

interface IProps {
	cards: ICard[]
}

export const HelpfulBlogPosts: FC<IProps> = ({ cards }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				ПОЛЕЗНЫЕ СТАТЬИ ИЗ БЛОГА
			</Heading>

			<Container className={styles.container}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params3Col}
				>
					{cards.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardBlackout card={card}
								titleSize="mobLarge"
								bodySize="large"
								position="center"
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

			<Link to={CRUISE_ROUTES.BLOG} className="button">
				ВСЕ СТАтьи
			</Link>
		</Container>

	)
}
