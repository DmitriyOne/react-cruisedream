import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { ECardPosition, ETitleSize } from '@crdr/enums'
import { ICard } from '@crdr/interfaces'

import { Discount } from '@crdr/components'
import { Heading, MyImage } from '@crdr/ui'

import { ECardSize, EFamily, EPadding } from './enums/Enums'

import styles from './card-blackout.module.scss'

interface IProps {
	card: ICard
	cardPadding?: keyof typeof EPadding
	cardSize?: keyof typeof ECardSize
	cardFamily?: keyof typeof EFamily
	titleSize?: keyof typeof ETitleSize
	bodySize?: keyof typeof ETitleSize
	position?: keyof typeof ECardPosition
	isBodyBottomLink?: boolean
	isBottomLink?: boolean
	isLinkWrapper?: boolean
	buttonClass?: string
}

export const CardBlackout: FC<IProps> = ({
	card,
	cardPadding = 'small',
	cardSize = 'large',
	cardFamily = 'ssp',
	bodySize = 'small',
	titleSize = 'large',
	position = 'spb',
	isBodyBottomLink = true,
	isBottomLink = false,
	isLinkWrapper = false,
	buttonClass,
}) => {

	const componentClassName = classNames(styles.component, {
		[styles.spb]: position === 'spb',
		[styles.center]: position === 'center',
		[styles.start]: position === 'start',
		[styles.large]: cardSize === 'large',
		[styles.small]: cardSize === 'small',
		[styles.paddingL]: cardPadding === 'large',
		[styles.paddingS]: cardPadding === 'small',
		[styles.paddingNull]: cardPadding === 'null',
	})
	const titleClassName = classNames(styles.title, {
		[styles.montserrat]: cardFamily === 'mont',
		[styles.sourceSansPro]: cardFamily === 'ssp',
		[styles.large]: titleSize === 'large',
		[styles.middle]: titleSize === 'middle',
		[styles.small]: titleSize === 'small',
	})
	const bodyClassName = classNames(styles.body, {
		[styles.large]: bodySize === 'large',
		[styles.small]: bodySize === 'small',
		// [styles.spb]: position === 'spb',
		[styles.center]: position === 'center',
	})
	const buttonClassName = classNames(styles.button, buttonClass, {
		[styles.mt0]: position === 'center',
	})
	const subtitleClassName = classNames(styles.subtitle, {
		[styles.montserrat]: cardFamily === 'mont',
		[styles.sourceSansPro]: cardFamily === 'ssp',
	})
	return (
		<div className={componentClassName}>
			<div className={styles.imageWrapper} >
				<MyImage
					imageClass={styles.image}
					src={card.image.src}
					alt={card.image.alt}
				/>
			</div>
			<div className={bodyClassName}>
				<Heading as="h4" className={titleClassName}>
					{card.title}
				</Heading>
				{card.date &&
					<span className={styles.date}>
						{card.date}
					</span>
				}
				{card.subtitle &&
					<p className={subtitleClassName}>
						{card.subtitle}
					</p>
				}
				{card.isDiscount &&
					<Discount
						className={styles.discount}
						percentage={card.discountPercentage}
					/>
				}
				{isBodyBottomLink &&
					<Link
						href={`${card.href}/${card.title}`}
						className={buttonClassName}
					>
						ВЫБРАТЬ
					</Link>
				}
			</div>
			{isBottomLink && <Link
				href={`${card.href}/${card.title}`}
				className={buttonClassName}
			>
				ПОКАЗАТЬ КРУИЗЫ
			</Link>}
			{isLinkWrapper &&
				<Link
					href={`${card.href}/${card.title}`}
					className={styles.linkWrapper}
				/>
			}
		</div>
	)
}
