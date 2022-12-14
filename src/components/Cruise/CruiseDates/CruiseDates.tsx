import { FC, useEffect, useState } from 'react'

import { useWindowSize } from '../../../hooks'
import { MyTooltip } from '../../MyTooltip'

import calendarIcon from './icons/calendar.svg'
import arrowIcon from './icons/arrow-down.svg'

import styles from './cruise-dates.module.scss'
import classNames from 'classnames'

interface IProps {
	id?: string
	datepicker: string
	otherDates?: string[]
	cruiseName?: string
	classNameText?: string
	classNameArrow?: string
}

export const CruiseDates: FC<IProps> = ({
	datepicker,
	otherDates,
	id,
	classNameText,
	classNameArrow
}) => {
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
				<span className={classNames(classNameText, styles.text)}>
					{datepicker}
				</span>
			</MyTooltip>
			<span className={classNames(classNameArrow, styles.arrow)}>
				<img
					src={arrowIcon}
					alt="Arrow Icon"
				/>
			</span>
		</div>
	)
}
