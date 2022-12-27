import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ICard } from '../../../model/interfaces'
import { Heading } from '../../../components'

import styles from './card-blackout.module.scss'

export const CardBlackout: FC<ICard> = ({ ...card }) => {
	return (
		<div className={styles.component}>
			<div className={styles.imageWrapper} >
				<img
					className={styles.image}
					src={card.src}
					alt={card.alt}
				/>
			</div>
			<div className={styles.body}>
				<Heading as="h4" className={styles.title}>
					{card.title}
				</Heading>
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
