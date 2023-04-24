import { FC, Fragment } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { params3Col, params4Col } from '@crdr/fakedata'

import { ECardPosition, ECardType, ETitleSize } from '@crdr/enums'
import { ICard } from '@crdr/interfaces'

import { CardBlackout, CardDefault, CardPopularCruise } from '@crdr/components'
import { MySwiper } from '@crdr/plugins'
import { Container, Heading } from '@crdr/ui'

import styles from './popular-post.module.scss'

interface IProps {
	id: string
	componentClass?: string
	title: string
	columns: '3' | '4'
	isArrowTopStatic?: boolean
	isArrowGray?: boolean
	data: ICard[]
	cardType: keyof typeof ECardType
	cardBodySize?: keyof typeof ETitleSize
	cardContentPosition?: keyof typeof ECardPosition
	isArrowIndentEdge?: boolean
	isSwiperIndentMobile?: boolean
	bottomBtnHref?: string
	bottomBtnText?: string
}

export const PopularPost: FC<IProps> = ({
	id,
	componentClass,
	title,
	columns,
	isArrowTopStatic,
	isArrowGray,
	cardType,
	data,
	cardBodySize,
	cardContentPosition,
	isArrowIndentEdge,
	isSwiperIndentMobile,
	bottomBtnHref,
	bottomBtnText,
}) => {

	const params = columns === '3' ? params3Col : params4Col
	return (
		<Container
			id={id}
			width="full"
			direction="column"
			className={classNames(styles.component, componentClass)}
			tag="section"
		>
			<Heading as="h2" className="title-secondary">
				{title}
			</Heading>

			<Container className={styles.container}>
				<MySwiper
					params={params}
					buttonPosition="behind-swiper"
					arrowClass={isArrowTopStatic ? styles.swiperArrow : ''}
					arrowColor={isArrowGray ? 'gray' : 'white'}
					isSlideBoxShadow
					isArrowIndentEdge={isArrowIndentEdge}
					isSwiperIndentMobile={isSwiperIndentMobile}
					isArrowShowOnlyTablet
				>
					{data.map((card, idx) =>
						<Fragment key={idx} >
							{cardType === 'blackout' &&
								<CardBlackout
									card={card}
									bodySize={cardBodySize}
									position={cardContentPosition}
								/>
							}
							{cardType === 'popular_cruise' &&
								<CardPopularCruise
									{...card}
								/>
							}
							{cardType === 'default' &&
								<CardDefault
									titleAlign="center"
									bodyPadding="l"
									isSubtitleIndent
									isSubtitleJustify
									{...card}
								/>
							}
						</Fragment>
					)}
				</MySwiper>
			</Container>

			{bottomBtnHref &&
				<Link
					href={bottomBtnHref}
					className="button"
				>
					{bottomBtnText}
				</Link>
			}
		</Container>

	)
}
