import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, CardAboutButton, Container, Heading } from '../../../../components'
import { useSwiperButtons } from '../../../../hooks'
import { dataAboutCompany, params3x3Grid } from '../../../../fakedata'

import 'swiper/css'
import styles from './all-cruise-company.module.scss'

export const AllCruiseCompany = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				ВСЕ КРУИЗНЫЕ КОМПАНИИ
			</Heading>

			<Container className={styles.container}>
				<Swiper
					className={styles.swiper}
					onSwiper={upDateSwiper}
					{...params3x3Grid}
				>
					{dataAboutCompany.map(card =>
						<SwiperSlide key={card.id} className={styles.slide}>
							<CardAboutButton
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
