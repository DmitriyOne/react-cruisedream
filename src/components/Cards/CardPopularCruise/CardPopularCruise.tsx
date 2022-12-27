import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ICard } from '../../../model/interfaces'

import { CruiseAmountDays, CruiseDates, CruiseName, CruisePrice, CruiseRoute, CruiseTimer } from '../../Cruise'
import { Discount } from '../../Discount'
import { ShipName } from '../../Ship'

import styles from './card-popular-cruise.module.scss'

export const CardPopularCruise: FC<ICard> = ({ ...card }) => {
	return (
		<div className={styles.component}>
			<div className={styles.header}>
				<div className={styles.imageWrapper}>
					<img src={card.src} alt={card.alt} />
				</div>
				<CruiseAmountDays className={styles.amountDays} />
				<Discount className={styles.discount} percentage={55} />
				<CruiseTimer deadline="31 Dec 2022" />
			</div>
			<div className={styles.body}>
				<CruiseName />
				<ShipName classNameText={styles.shipName} isIcon />
				<CruiseDates />
				<CruiseRoute />
				<CruisePrice />
			</div>
			<Link
				to={card.href!}
				className={styles.button}
			>
				ВЫБРАТЬ
			</Link>
		</div>
	)
}
