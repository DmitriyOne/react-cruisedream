import { useRef, useState } from 'react'
import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'

import { paramsRow, dataFleet } from '../../../../fakedata'
import { useSwiperButtons } from '../../../../hooks'

import { Button, CardAboutButton, Container, Heading } from '../../../../components'

import 'swiper/css'
import 'swiper/css/grid'
import styles from './fleet.module.scss'

export const Fleet = () => {
	const [isShowAll, setIsShowAll] = useState(false)
	const refButton = useRef<HTMLButtonElement>(null)
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	const getAll = (e: any) => {
		e.preventDefault()
		setIsShowAll(true)
		setTimeout(() => {
			refButton.current?.remove()
		}, 1000)
	}

	const swiperClass = classNames(styles.swiper, styles.grid)
	const sliderClass = classNames(styles.slide, styles.w33)
	const buttonClass = classNames('button', {
		[styles.hideButton]: isShowAll
	})
	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				ФЛОТ MSC CRUISES
			</Heading>

			<Container className={styles.container}>
				<Swiper
					className={swiperClass}
					onSwiper={upDateSwiper}
					{...paramsRow}
				>
					{isShowAll
						?
						<>
							{dataFleet.map(card =>
								<SwiperSlide key={card.id} className={sliderClass}>
									<CardAboutButton
										{...card}
									/>
								</SwiperSlide>
							)}
						</>
						:
						<>
							{dataFleet.slice(0, 9).map(card =>
								<SwiperSlide key={card.id} className={sliderClass}>
									<CardAboutButton
										{...card}
									/>
								</SwiperSlide>
							)}
						</>
					}
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

			<Button
				ref={refButton}
				className={buttonClass}
				onClick={(e) => getAll(e)}
			>
				ВСЕ КОРАБЛИ
			</Button>
		</Container>
	)
}
