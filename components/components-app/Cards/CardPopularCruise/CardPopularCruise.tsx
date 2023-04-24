/* eslint-disable max-len */
import { FC } from 'react'
import Link from 'next/link'

import { ICard } from '@crdr/interfaces'

import { CruiseAmountDays, CruiseDates, CruiseLogo, CruiseName, CruisePrice, CruiseRoute, Discount, ShipName, Timer } from '@crdr/components'
import { MyImage } from '@crdr/ui'

import cruiseImg1 from '@crdr/image/cruise/slider/cruise-1.jpeg'

import styles from './card-popular-cruise.module.scss'

export const CardPopularCruise: FC<ICard> = ({ ...card }) => {
	return (
		<div className={styles.component}>
			<div className={styles.header}>
				<div className={styles.cruisePhoto}>
					<MyImage
						src={cruiseImg1}
						alt={`Cruise ${card.title}`}
					/>
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
				<Timer
					classComponent={styles.timer}
					classText={styles.timerText}
					classNumber={styles.timerNumber}
					deadline="18 March 2023"
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
				href={`${card.href}/${card.title}`}
				className={styles.button}
			>
				ВЫБРАТЬ
			</Link>
		</div>
	)
}
