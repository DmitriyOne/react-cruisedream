import { FC, useEffect, useState } from 'react'

import { useWindowSize } from '../../../hooks'
import { MyTooltip } from '../../MyTooltip'

import calendarIcon from './icons/calendar.svg'
import arrowIcon from './icons/arrow-down.svg'

import styles from './cruise-dates.module.scss'

interface IProps {
	id?: string
	datepicker: string
	otherDates?: string[]
	cruiseName?: string
}

export const CruiseDates: FC<IProps> = ({ datepicker, otherDates, id }) => {
	const { isMobile } = useWindowSize()
	const [idTooltip, setIdTooltip] = useState('')

	useEffect(() => {
		setIdTooltip('my-dates-tooltip-' + id)
	}, [id])

	return (
		<div id={idTooltip} className={styles.component}>
			{isMobile &&
				<span className={styles.icon}>
					<img
						src={calendarIcon}
						alt="Calendar Icon"
					/>
				</span>
			}
			<MyTooltip isDates otherDates={otherDates}>
				<span className={styles.text}>
					{datepicker}
				</span>
			</MyTooltip>
			<span className={styles.arrow}>
				<img
					src={arrowIcon}
					alt="Arrow Icon"
				/>
			</span>
		</div>
	)
}
