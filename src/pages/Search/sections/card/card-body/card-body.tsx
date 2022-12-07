import { useWindowSize } from '../../../../../hooks'

import styles from './card-body.module.scss'
import {
	CruiseAmountDays,
	CruiseLogo,
	CruiseDates,
	CruiseName,
	CruiseIncludedIcon,
	CruiseShipName,
	CruiseRoute
} from '../../../../../components/Cruise'

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
				<CruiseShipName />
				<CruiseRoute />
			</div>

			{!isMobile &&
				<CruiseIncludedIcon />
			}
		</div>
	)
}
