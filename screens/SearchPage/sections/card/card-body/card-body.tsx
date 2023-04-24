import { useWindowSize } from '@crdr/hooks'

import {
	CruiseAmountDays,
	CruiseDates,
	CruiseIncludedIcon,
	CruiseLogo,
	CruiseName,
	CruiseRoute,
	ShipName,
} from '@crdr/components'

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
