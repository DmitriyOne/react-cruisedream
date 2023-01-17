/* eslint-disable no-unused-vars */
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ICard } from '../../../model/interfaces'
import { Heading } from '../../../components-ui'

import styles from './card-blackout.module.scss'
import classNames from 'classnames'

enum ETitleSize {
	large = 'l',
	small = 's',
	mobLarge = 'mob-large'
}

enum EPosition {
	spb = 'spb',
	center = 'center'
}

interface IProps {
	card: ICard
	titleSize?: keyof typeof ETitleSize
	bodySize?: keyof typeof ETitleSize
	position?: keyof typeof EPosition
}

export const CardBlackout: FC<IProps> = ({
	card,
	bodySize = 'small',
	titleSize = 'large',
	position = 'spb',
}) => {
	const componentClassName = classNames(styles.component, {
		[styles.spb]: position === 'spb',
		[styles.center]: position === 'center'
	})
	const titleClassName = classNames(styles.title, {
		[styles.large]: titleSize === 'large',
		[styles.small]: titleSize === 'small',
		[styles.mobLarge]: titleSize === 'mobLarge'
	})
	const bodyClassName = classNames(styles.body, {
		[styles.large]: bodySize === 'large',
		[styles.small]: bodySize === 'small',
		[styles.spb]: position === 'spb',
		[styles.center]: position === 'center'
	})
	const buttonClassName = classNames(styles.button, {
		[styles.mt0]: position === 'center'
	})
	return (
		<div className={componentClassName}>
			<div className={styles.imageWrapper} >
				<img
					className={styles.image}
					src={card.src}
					alt={card.alt}
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
					<p className={styles.subtitle}>
						{card.subtitle}
					</p>
				}
				<Link
					to={`${card.href}/${card.id}`}
					className={buttonClassName}
				>
					ВЫБРАТЬ
				</Link>
			</div>
		</div>
	)
}
