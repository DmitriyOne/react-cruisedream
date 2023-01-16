import { FC } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { ICard } from '../../../model/interfaces'
import { Discount, Heading } from '../../../components'

import styles from './card-discount.module.scss'

export const CardDiscount: FC<ICard> = ({ isDiscount, isEveryCardButton, ...card }) => {

	return (
		<>
			{isEveryCardButton
				?
				<div className={classNames(styles.component, styles.componentDiv)}>
					<div className={styles.cardImageWrapper} >
						<img
							className={styles.cardImage}
							src={card.src}
							alt={card.alt}
						/>
					</div>
					<div>
						<Heading as="h4" className={styles.cardTitle} align="center">
							{card.title}
						</Heading>
						<p className={styles.cardDescription}>
							{card.subtitle}
						</p>
					</div>
					{isDiscount &&
						<Discount
							className={styles.discount}
							percentage={card.discountPercentage}
						/>
					}
					<Link to="/empty" className={styles.cardButton}>
						ПОКАЗАТЬ КРУИЗЫ
					</Link>
				</div>
				:
				<Link
					to={card.href!}
					className={classNames(styles.component, styles.componentLink)}
				>
					<div className={styles.cardImageWrapper} >
						<img
							className={styles.cardImage}
							src={card.src}
							alt={card.alt}
						/>
					</div>
					<Heading as="h4" className={styles.cardTitle} align="center">
						{card.title}
					</Heading>
					<p className={styles.cardDescription}>
						{card.subtitle}
					</p>
					{isDiscount &&
						<Discount
							className={styles.discount}
							percentage={card.discountPercentage}
						/>
					}
				</Link>
			}
		</>
	)
}
