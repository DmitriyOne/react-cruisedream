import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import { params3x2Grid, dataRegionsCard, paramsRow } from '../../../fakedata'
import { CRUISE_ROUTES } from '../../../constants'

import { CardBlackout, Container, Heading } from '../../../components'

import 'swiper/css'
import 'swiper/css/grid'
import styles from './regions-cards.module.scss'
import { FC, useRef, useState } from 'react'

interface IProps {
	position?: 'grid' | 'row'
}

export const RegionsCards: FC<IProps> = ({ position = 'grid' }) => {
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
	const params = position === 'grid' ? params3x2Grid : paramsRow
	return (
		<Container
			width="full"
			direction="column"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				РЕГИОНЫ
			</Heading>

			<Container>
				<Swiper
					className={swiperClass}
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
