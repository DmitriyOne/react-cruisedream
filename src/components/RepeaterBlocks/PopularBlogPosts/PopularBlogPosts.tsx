import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params3Col, dataPopularBlogPosts } from '../../../fakedata'
import { CRUISE_ROUTES } from '../../../constants'
import { useSwiperButtons } from '../../../hooks'

import { CardBlackout, Container, Heading, Button } from '../../../components'

import 'swiper/css'
import styles from './popular-blog-post.module.scss'

export const PopularBlogPosts = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container
			id="ports"
			width="full"
			direction="column"
			className={classNames(styles.component, 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				ПОПУЛЯРНЫЕ СООБЩЕНИЯ ИЗ БЛОГА
			</Heading>

			<Container className={styles.container}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params3Col}
				>
					{dataPopularBlogPosts.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardBlackout
								card={card}
								titleSize="small"
								bodySize="large"
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
				ВСЕ ПОСТЫ
			</Link>
		</Container>

	)
}
