import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { params3Col, dataPopularBlogPosts } from '../../../fakedata'
import { CRUISE_ROUTES } from '../../../constants'

import { CardBlackout, Container, Heading } from '../../../components'

import 'swiper/css'
import styles from './popular-blog-post.module.scss'

export const PopularBlogPosts = () => {
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

			<Container>
				<Swiper
					className={styles.swiper}
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
			</Container>

			<Link to={CRUISE_ROUTES.BLOG} className="button">
				ВСЕ ПОСТЫ
			</Link>
		</Container>

	)
}
