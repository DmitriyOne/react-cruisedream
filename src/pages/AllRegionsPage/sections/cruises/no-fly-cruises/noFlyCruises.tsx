import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { dataWithoutFlyCard, params4Col } from '../../../../../fakedata'

import { CardButtonHover } from '../../../../../components'
import { Button, Container, Heading } from '../../../../../components-ui'
import { useSwiperButtons } from '../../../../../hooks'

import 'swiper/css'
import styles from '../cruises.module.scss'

export const NoFlyCruises = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<>
			<Heading as="h2" className="title-secondary">
				популярные круизы из России
			</Heading>
			<Container className={styles.container}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params4Col}
				>
					{dataWithoutFlyCard.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardButtonHover {...card} />
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
		</>
	)
}
