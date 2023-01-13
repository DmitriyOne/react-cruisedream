import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { dataInternationalCard, params4Col } from '../../../../../fakedata'

import { Button, CardButtonHover, Container, Heading } from '../../../../../components'
import { useSwiperButtons } from '../../../../../hooks'

import 'swiper/css'
import styles from '../cruises.module.scss'

export const InternationalCruises = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<>
			<Heading as="h2" className={classNames(styles.pt, 'title-secondary')}>
				ПОПУЛЯРНЫЕ ЗАРУБЕЖНЫЕ КРУИЗЫ
			</Heading>
			<Container className={styles.container}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params4Col}
				>
					{dataInternationalCard.map(card =>
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
