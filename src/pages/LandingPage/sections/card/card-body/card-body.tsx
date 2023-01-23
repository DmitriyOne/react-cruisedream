import { useWindowSize } from '../../../../../hooks'

import {
	CruiseAmountDays,
	CruiseLogo,
	CruiseDates,
	CruiseName,
	CruiseIncludedIcon,
	CruiseRoute
} from '../../../../../components/Cruise'
import { ShipName } from '../../../../../components/Ship'

import styles from './card-body.module.scss'

export const CardBody = () => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>

			<div className={styles.header}>
				{isMobile
					?
					<CruiseLogo />
					:
					<CruiseAmountDays />
				}
				<div className={styles.headerWrapper}>
					<CruiseName />
					<CruiseDates />
				</div>
			</div>

			<div className={styles.body}>
				<ShipName classComponent={styles.shipWrapper} isIcon />
				<CruiseRoute />
			</div>

			{!isMobile &&
				<CruiseIncludedIcon />
			}
		</div>
	)
}
