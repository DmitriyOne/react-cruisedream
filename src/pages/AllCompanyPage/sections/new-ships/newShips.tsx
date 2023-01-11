import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, CardWithRoute, Container, Heading } from '../../../../components'
import { params4Col, dataNewShip } from '../../../../fakedata'
import { useSwiperButtons } from '../../../../hooks'

import 'swiper/css'
import styles from './new-ships.module.scss'

export const NewShips = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pb-section-with-swiper')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				НОВЫЕ КОРАБЛИ
			</Heading>

			<Container className={styles.container}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params4Col}
				>
					{dataNewShip.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardWithRoute
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
