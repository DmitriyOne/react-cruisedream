/* eslint-disable max-len */
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ICard } from '../../../model/interfaces'

import { CruiseAmountDays, CruiseDates, CruiseLogo, CruiseName, CruisePrice, CruiseRoute, CruiseSlider, CruiseTimer } from '../../Cruise'
import { Discount } from '../../Discount'
import { ShipName } from '../../Ship'

import styles from './card-popular-cruise.module.scss'

export const CardPopularCruise: FC<ICard> = ({ ...card }) => {
	return (
		<div className={styles.component}>
			<div className={styles.header}>
				<CruiseSlider
					classImage={styles.sliderImage}
					classArrow={styles.sliderArrow}
				/>
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
				<CruiseTimer
					classComponent={styles.timer}
					classText={styles.timerText}
					classNumber={styles.timerNumber}
					deadline="5 Jan 2023"
					isSeconds={false}
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
