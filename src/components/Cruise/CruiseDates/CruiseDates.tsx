import { useWindowSize } from '../../../hooks'

import calendarIcon from './icons/calendar.svg'
import arrowIcon from './icons/arrow-down.svg'

import styles from './cruise-dates.module.scss'
import { FC } from 'react'

interface IProps {
	datepicker: string
}

export const CruiseDates:FC<IProps> = ({datepicker}) => {
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
				{datepicker}
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
