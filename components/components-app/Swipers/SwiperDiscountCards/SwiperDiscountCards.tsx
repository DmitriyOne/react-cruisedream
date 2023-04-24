import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { CRUISE_ROUTES } from '@crdr/constants'
import { dataSale, paramsRow4PerColumn } from '@crdr/fakedata'

import { CardBlackout } from '@crdr/components'
import { MySwiper } from '@crdr/plugins'
import { Heading } from '@crdr/ui'

import styles from './swiper-discount-cards.module.scss'

interface IProps {
	title?: string
	isNewSales?: boolean
	isArrowIndentEdge?: boolean
	isSwiperIndentMobile?: boolean
}

export const SwiperDiscountCards: FC<IProps> = ({
	title = 'АКЦИИ',
	isNewSales,
	isArrowIndentEdge,
	isSwiperIndentMobile,
}) => {
	const [isSlice, setIsSlice] = useState<boolean>()
	const { pathname } = useRouter()

	useEffect(() => {
		if (pathname === CRUISE_ROUTES.DISCOUNTS && !isNewSales) {
			setIsSlice(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	return (
		<>
			<Heading as="h2" className="title-secondary">
				{title}
			</Heading>
			<MySwiper
				params={paramsRow4PerColumn}
				isArrowShowOnlyTablet
				swiperDisplay={isSlice ? 'grid' : undefined}
				slideClass={styles.slideFilter}
				slideWidth="w25"
				isSwiperIndentMobile={isSwiperIndentMobile}
				isArrowIndentEdge={isArrowIndentEdge}
				isSlideBoxShadow
			>
				{dataSale
					.slice(0, isSlice ? dataSale.length : 4)
					.map((card, idx) => (
						<CardBlackout
							key={idx}
							card={card}
							isBodyBottomLink={false}
							isBottomLink={isSlice ? true : false}
							buttonClass={styles.cardButton}
							position={isSlice ? 'spb' : 'start'}
							cardSize="small"
							titleSize="small"
							cardFamily="mont"
							cardPadding={isSlice ? 'null' : 'large'}
							isLinkWrapper={isSlice ? false : true}
						/>
					))}
			</MySwiper>
			{pathname !== CRUISE_ROUTES.DISCOUNTS &&
				<Link
					className="button"
					href={CRUISE_ROUTES.DISCOUNTS}
				>
					ВСЕ АКЦИИ
				</Link>
			}
		</>
	)
}
