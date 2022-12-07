import { useWindowSize } from '../../../hooks'

import calendarIcon from './icons/calendar.svg'
import arrowIcon from './icons/arrow-down.svg'

import styles from './cruise-dates.module.scss'

export const CruiseDates = () => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>
			{isMobile &&
				<span className={styles.icon}>
					<img
						src={calendarIcon}
						alt="Calendar Icon"
					/>
				</span>
			}
			<span className={styles.text}>
				01.03.22 - 08.03.23
			</span>
			<span className={styles.arrow}>
				<img
					src={arrowIcon}
					alt="Arrow Icon"
				/>
			</span>
		</div>
	)
}
