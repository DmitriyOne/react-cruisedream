import { FC, useRef, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { CRUISE_ROUTES } from '@crdr/constants'
import { dataRegionsCard, params3x2Grid, paramsRow3PerColumn } from '@crdr/fakedata'

import { ECardPosition } from '@crdr/enums'

import { CardBlackout } from '@crdr/components'
import { MySwiper } from '@crdr/plugins'
import { Container, Heading } from '@crdr/ui'

import styles from './swiper-region-cards.module.scss'

interface IProps {
	position?: 'grid' | 'row'
	cardPositionContent?: keyof typeof ECardPosition
	isMobilePaddingNull?: boolean
}

export const SwiperRegionCards: FC<IProps> = ({ position = 'grid', isMobilePaddingNull, cardPositionContent = 'spb' }) => {
	const [isShowAll, setIsShowAll] = useState(false)

	const refButton = useRef<HTMLAnchorElement>(null)

	const getAll = (e: any): void => {
		if (position === 'grid') {
			return null
		}
		e.preventDefault()
		setIsShowAll(true)
		setTimeout(() => {
			refButton.current?.remove()
		}, 1000)
	}

	const componentClassName = classNames(
		styles.component,
		'pt-section',
		'pb-section',
		isMobilePaddingNull ? styles.mobilePaddingNull : '',
	)

	const buttonClass = classNames('button', {
		[styles.hideButton]: isShowAll,
	})
	const params = position === 'grid' ? params3x2Grid : paramsRow3PerColumn

	return (
		<Container
			width="full"
			direction="column"
			className={componentClassName}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				РЕГИОНЫ
			</Heading>

			<Container className={styles.container}>
				<MySwiper
					params={params}
					buttonPosition="behind-swiper"
					swiperDisplay={position === 'row' ? 'grid' : undefined}
					slideWidth={position === 'row' ? 'w33' : undefined}
					isArrowShowOnlyTablet
					isSlideBoxShadow
				>
					{dataRegionsCard
						.slice(0, isShowAll ? dataRegionsCard.length : 6)
						.map((card, idx) => (
							<CardBlackout
								key={idx}
								card={card}
								isBodyBottomLink={true}
								position={cardPositionContent}
							/>
						))}
				</MySwiper>
			</Container>

			<Link
				ref={refButton}
				href={CRUISE_ROUTES.REGIONS}
				className={buttonClass}
				onClick={(e) => getAll(e)}
			>
				ВСЕ РЕГИОНЫ
			</Link>
		</Container>
	)
}
