import { FC, useEffect, useState } from 'react'

import { useWindowSize } from '../../../hooks'
import { MyTooltip } from '../../MyTooltip'
import { DataTooltipDates } from './data/tooltip-dates'

import calendarIcon from './icons/calendar.svg'
import arrowIcon from './icons/arrow-down.svg'

import styles from './cruise-dates.module.scss'
import classNames from 'classnames'

interface IProps {
	classNameText?: string
	classNameArrow?: string
}

export const CruiseDates: FC<IProps> = ({
	classNameText,
	classNameArrow
}) => {
	const { isMobile } = useWindowSize()
	const [idTooltip, setIdTooltip] = useState('')

	useEffect(() => {
		setIdTooltip('my-dates-tooltip-' + 1)
	}, [])

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
			<MyTooltip isDates tooltipDates={DataTooltipDates}>
				<span className={classNames(classNameText, styles.text)}>
					01.03.23 - 08.03.23
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
