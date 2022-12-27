import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params3Col } from '../../../../fakedata'

import { Link } from 'react-router-dom'
import { CardBlackout, Container, Heading } from '../../../../components'
import { CRUISE_ROUTES } from '../../../../constants'
import styles from './popular-post.module.scss'
import { dataPopularBlogPosts } from '../../../../fakedata/data-popular-blog-posts'

export const PopularPost = () => {
	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
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

			<Link to={CRUISE_ROUTES.SHIPS} className="button">
				ВСЕ ПОСТЫ
			</Link>
		</Container>

	)
}
