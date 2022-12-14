import classNames from 'classnames'
import { useState } from 'react'

import { B, Breadcrumb, Container, Heading } from '../../../../components'
import { CruiseAmountDays, CruiseDates, CruiseGallery, CruiseIncludedIcon, CruiseLogo, CruiseShipName, CruisePrice } from '../../../../components/Cruise'
import { DataSingleCruise } from '../../../../fakedata/data-single-cruise'

import styles from './overview.module.scss'

export const Overview = () => {
	const [cruise, setCruise] = useState(DataSingleCruise)

	return (
		<Container width="full" className={styles.component}>
			<Container width="containerS" direction="column" align="start">

				<div className={styles.header}>
					<Breadcrumb currentPage={cruise.cruiseName} />
					<div className={styles.numberCruise}>
						Номер круиза {cruise.id}
					</div>
				</div>

				<CruiseGallery label={cruise.label} />

				<div
					className={classNames(
						styles.row, styles.alignTop
					)}
				>
					<div className={styles.colLeft}>
						<Heading as="h1">
							<B fontWeight={600} className={styles.title}>
								{cruise.cruiseName}
							</B>
						</Heading>
					</div>
					<div className={styles.colRight}>
						<CruiseAmountDays
							className={styles.daysWrapper}
							days={cruise.days}
						/>
						<CruiseDates
							classNameText={styles.datesText}
							classNameArrow={styles.datesArrow}
							datepicker={cruise.datepicker}
							otherDates={cruise.otherDates}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.colLeft}>
						<CruiseLogo logo={cruise.logo} />
						<CruiseShipName
							classNameText={styles.shipName}
							ship={cruise.shipName}
							isIcon={false}
						/>
					</div>
				</div>

				<div
					className={classNames(
						styles.row, styles.pt0, styles.alignBottom
					)}
				>
					<div className={styles.colLeft}>
						<CruiseIncludedIcon
							classNameItem={styles.includedItem}
							classNameIcon={styles.includedIcon}
							icons={cruise.icons}
						/>
					</div>
					<div className={classNames(styles.colRight, styles.column)}>
						<CruisePrice
							buttonClass={styles.button}
							priceClass={styles.price}
							priceSpanClass={styles.priceSpan}
							textClass={styles.priceBottomText}
							modalButtonClass={styles.priceModalBtn}
							priceFrom={cruise.priceFrom}
							isSale={cruise.isSale}
							sale={cruise.sale}
							isCruisePage
							buttonText="ЗАБРОНИРОВАТЬ"
						/>
					</div>
				</div>

			</Container>
		</Container>
	)
}
