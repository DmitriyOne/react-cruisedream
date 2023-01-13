/* eslint-disable max-len */
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ICard } from '../../../model/interfaces'

import cruiseImg1 from '../../Cruise/CruiseSlider/images/cruise-1.jpeg'

import { CruiseAmountDays, CruiseDates, CruiseLogo, CruiseName, CruisePrice, CruiseRoute } from '../../Cruise'
import { MyTimer, Discount } from '../../../components'
import { ShipName } from '../../Ship'

import styles from './card-popular-cruise.module.scss'

export const CardPopularCruise: FC<ICard> = ({ ...card }) => {
	return (
		<div className={styles.component}>
			<div className={styles.header}>
				<div className={styles.cruisePhoto}>
					<img src={cruiseImg1} alt="" />
				</div>
				<CruiseAmountDays
					classComponent={styles.amountDays}
					classNumber={styles.amountNumber}
					classText={styles.amountText}
				/>
				<Discount
					percentage={55}
					className={styles.discount}
					classNameText={styles.discountText}
					classNamePercentage={styles.discountPercentage}
				/>
				<MyTimer
					classComponent={styles.timer}
					classText={styles.timerText}
					classNumber={styles.timerNumber}
					deadline="18 Jan 2023"
				/>
			</div>
			<div className={styles.body}>
				<CruiseLogo className={styles.logo} />
				<CruiseName className={styles.name} />
				<ShipName
					classComponent={styles.shipWrapper}
					classIcon={styles.shipIcon}
					classNameText={styles.shipName}
					isIcon
				/>
				<CruiseDates
					classComponent={styles.dateWrapper}
					classNameArrow={styles.dateArrow}
					classNameText={styles.dateText}
					classTooltipWrapper={styles.tooltipWrapper}
					classTooltipText={styles.tooltipText}
					isAlwaysShowIcon
				/>
				<CruiseRoute
					classText={styles.routeText}
					classIcon={styles.routeIcon}
					classTooltipWrapper={styles.tooltipWrapper}
					classTooltipText={styles.tooltipText}
				/>
				<CruisePrice
					priceClass={styles.priceText}
					priceSpanClass={styles.priceTextSpan}
					isOnlyPrice
				/>
			</div>
			<Link
				to={`${card.href}/${card.id}`}
				className={styles.button}
			>
				ВЫБРАТЬ
			</Link>
		</div>
	)
}
