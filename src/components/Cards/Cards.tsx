import React, { FC } from 'react'
import { Container } from '../Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from '../../fakedata/swiper-grid'
import { SwiperOptions } from 'swiper'
import { ICard } from '../../model/interfaces'

import styles from './CardBlackout/card-blackout.module.scss' 

interface IProps {
	params: SwiperOptions
	classComponent?: string
	cards: ICard[]
}

export const Cards: FC<IProps> = ({ classComponent, cards, ...params }) => {
	return (
		<Container>
			<Swiper
				className={classComponent}
				{...params}
			>
				{cards.map(card =>
					<SwiperSlide key={card.id}>
						{/* <CardBlackout  {...card} /> */}
					</SwiperSlide>
				)}
			</Swiper>
		</Container>
	)
}
