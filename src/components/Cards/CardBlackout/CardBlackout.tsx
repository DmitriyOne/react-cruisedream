/* eslint-disable no-unused-vars */
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ICard } from '../../../model/interfaces'
import { Heading } from '../../../components'

import styles from './card-blackout.module.scss'
import classNames from 'classnames'

enum ETitleSize {
	large = 'l',
	small = 's'
}

interface IProps {
	card: ICard
	titleSize?: keyof typeof ETitleSize
	bodySize?: keyof typeof ETitleSize
}

export const CardBlackout: FC<IProps> = ({
	card,
	bodySize = 'small',
	titleSize = 'large'
}) => {
	const titleClassName = classNames(styles.title, {
		[styles.large]: titleSize === 'large',
		[styles.small]: titleSize === 'small',
	})
	const bodyClassName = classNames(styles.body, {
		[styles.large]: bodySize === 'large',
		[styles.small]: bodySize === 'small',
	})
	return (
		<div className={styles.component}>
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
				<p className={styles.subtitle}>
					{card.subtitle}
				</p>
				<Link
					to={card.href!}
					className={styles.button}
				>
					ВЫБРАТЬ
				</Link>
			</div>
		</div>
	)
}
