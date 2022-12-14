import classNames from 'classnames'
import { useState } from 'react'

import { DataSingleCruise } from '../../../../fakedata/data-single-cruise'
import { useWindowSize } from '../../../../hooks'

import { B, Breadcrumb, Container, Heading } from '../../../../components'
import {
	CruiseAmountDays,
	CruiseDates,
	CruiseGallery,
	CruiseIncludedIcon,
	CruiseLogo,
	CruiseShipName,
	CruisePrice,
	CruiseRoute
} from '../../../../components/Cruise'

import styles from './overview.module.scss'

export const Overview = () => {
	const [cruise, setCruise] = useState(DataSingleCruise)
	const { isMobile } = useWindowSize()


	const isShowOnDesktop = !isMobile
	const isShowOnMobile = isMobile
	const isShowIcon = isMobile
	return (
		<Container width="full" className={styles.component}>
			<Container width="containerS" direction="column" align="start">

				<div className={styles.header}>
					<Breadcrumb classComponent={styles.breadcrumb} currentPage={cruise.cruiseName} />
					<div className={styles.numberCruise}>
						Номер круиза {cruise.id}
					</div>
				</div>

				<CruiseGallery
					label={cruise.label}
					sale={cruise.sale}
					days={cruise.days}
				/>

				{isShowOnMobile &&
					<CruiseLogo
						className={styles.logo}
						logo={cruise.logo}
					/>
				}

				<div
					className={classNames(
						styles.row, styles.alignTop
					)}
				>
					<div className={styles.colLeft}>
						<Heading as="h1" className={styles.title}>
							<B fontWeight={600} >
								{cruise.cruiseName}
							</B>
						</Heading>
					</div>
					<div className={classNames(styles.colRight, styles.laptopReverse)}>
						{isShowOnDesktop &&
							<CruiseAmountDays
								className={styles.daysWrapper}
								days={cruise.days}
							/>
						}
						<CruiseDates
							classNameText={styles.datesText}
							classNameArrow={styles.datesArrow}
							datepicker={cruise.datepicker}
							otherDates={cruise.otherDates}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={classNames(styles.colLeft, styles.laptopFull)}>
						{isShowOnDesktop &&
							<CruiseLogo
								className={styles.logo}
								logo={cruise.logo}
							/>
						}
						<CruiseShipName
							classComponent={styles.shipWrapper}
							classNameText={styles.shipName}
							ship={cruise.shipName}
							isIcon={isShowIcon}
						/>
					</div>
				</div>

				{isShowOnMobile &&
					<CruiseRoute
						classComponent={styles.routeWrapper}
						routes={cruise.cruiseRoute}
					/>
				}

				<div
					className={classNames(
						styles.row, styles.pt0, styles.alignBottom
					)}
				>
					<div className={styles.colLeft}>
						{isShowOnDesktop &&
							<CruiseIncludedIcon
								classNameItem={styles.includedItem}
								classNameIcon={styles.includedIcon}
								icons={cruise.icons}
							/>
						}
					</div>
					<div className={classNames(styles.colRight, styles.column)}>
						<CruisePrice
							buttonsRowClass={styles.rowButtons}
							buttonClass={styles.button}
							priceClass={styles.price}
							priceSpanClass={styles.priceSpan}
							textClass={styles.priceBottomText}
							modalButtonClass={styles.priceModalBtn}
							discountClass={styles.discount}
							priceFrom={'150 000'}
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
