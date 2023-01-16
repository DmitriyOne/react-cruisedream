import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import { params3x2Grid, dataRegionsCard, paramsRow3PerColumn } from '../../../fakedata'
import { CRUISE_ROUTES } from '../../../constants'

import { Button, CardBlackout, Container, Heading } from '../../../components'

import 'swiper/css'
import 'swiper/css/grid'
import styles from './regions-cards.module.scss'
import { FC, useRef, useState } from 'react'
import { useSwiperButtons } from '../../../hooks'

interface IProps {
	position?: 'grid' | 'row'
}

export const RegionsCards: FC<IProps> = ({ position = 'grid' }) => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()
	const [isShowAll, setIsShowAll] = useState(false)
	const refButton = useRef<HTMLAnchorElement>(null)

	const getAll = (e: any) => {
		if (position === 'grid') {
			return null
		}
		e.preventDefault()
		setIsShowAll(true)
		setTimeout(() => {
			refButton.current?.remove()
		}, 1000)
	}

	const swiperClass = classNames(styles.swiper, {
		[styles.grid]: position === 'row'
	})
	const sliderClass = classNames(styles.slide, {
		[styles.w33]: position === 'row'
	})
	const buttonClass = classNames('button', {
		[styles.hideButton]: isShowAll
	})
	const params = position === 'grid' ? params3x2Grid : paramsRow3PerColumn
	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-s-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				РЕГИОНЫ
			</Heading>

			<Container className={styles.container}>
				<Swiper
					className={swiperClass}
					onSwiper={upDateSwiper}
					{...params}
				>
					{isShowAll
						?
						<>
							{dataRegionsCard.map(card =>
								<SwiperSlide key={card.id} className={sliderClass}>
									<CardBlackout card={card} />
								</SwiperSlide>
							)
							}
						</>
						:
						<>
							{dataRegionsCard.slice(0, 6).map(card =>
								<SwiperSlide key={card.id} className={sliderClass}>
									<CardBlackout card={card} />
								</SwiperSlide>
							)
							}
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

			<Link
				ref={refButton}
				to={CRUISE_ROUTES.REGIONS}
				className={buttonClass}
				onClick={(e) => getAll(e)}
			>
				ВСЕ РЕГИОНЫ
			</Link>
		</Container>
	)
}
