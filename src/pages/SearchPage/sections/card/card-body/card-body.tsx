import { FC } from 'react'
import { useWindowSize } from '../../../../../hooks'

import { IBody } from '../interfaces/IBody'

import {
	CruiseAmountDays,
	CruiseLogo,
	CruiseDates,
	CruiseName,
	CruiseIncludedIcon,
	CruiseShipName,
	CruiseRoute
} from '../../../../../components/Cruise'

import styles from './card-body.module.scss'

export const CardBody: FC<IBody> = ({
	id,
	logo,
	days,
	cruiseName,
	datepicker,
	otherDates,
	shipName,
	routes,
	icons
}) => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>

			<div className={styles.header}>
				{isMobile
					?
					<CruiseLogo logo={logo} />
					:
					<CruiseAmountDays days={days} />
				}
				<div className={styles.headerWrapper}>
					<CruiseName name={cruiseName} />
					<CruiseDates datepicker={datepicker} otherDates={otherDates} id={id} />
				</div>
			</div>

			<div className={styles.body}>
				<CruiseShipName classComponent={styles.shipWrapper} ship={shipName} />
				<CruiseRoute routes={routes} id={id} />
			</div>

			{!isMobile &&
				<CruiseIncludedIcon icons={icons} />
			}
		</div>
	)
}
