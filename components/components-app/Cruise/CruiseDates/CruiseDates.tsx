import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { useWindowSize } from '@crdr/hooks'

import { MyTooltip } from '@crdr/plugins'
import { MyImage } from '@crdr/ui'

import { DataTooltipDates } from './data/tooltip-dates'
import arrowIcon from './icons/arrow-down.svg'
import calendarIcon from './icons/calendar.svg'

import styles from './cruise-dates.module.scss'

interface IProps {
	classComponent?: string
	classNameText?: string
	classNameArrow?: string
	classTooltipText?: string
	classTooltipWrapper?: string
	isOnlyStartDate?: boolean
	isAlwaysShowIcon?: boolean
}

export const CruiseDates: FC<IProps> = ({
	classComponent,
	classNameText,
	classNameArrow,
	classTooltipText,
	classTooltipWrapper,
	isOnlyStartDate = false,
	isAlwaysShowIcon = false,
}) => {
	const { isMobile } = useWindowSize()
	const [idTooltip, setIdTooltip] = useState('')

	useEffect(() => {
		setIdTooltip('my-dates-tooltip-' + 1)
	}, [])

	const classNameComponent = classNames(classComponent, styles.component)
	const isShowIcon = isAlwaysShowIcon || isMobile
	return (
		<>
			{isOnlyStartDate
				?
				<div className={classNameComponent}>
					{isMobile &&
						<span className={styles.icon}>
							<MyImage
								src={calendarIcon}
								alt="Calendar Icon"
							/>
						</span>
					}
					<span className={classNames(classNameText, styles.text)}>
						01.03.23 - 08.03.23
					</span>
				</div>
				:
				<div id={idTooltip} className={classNameComponent}>
					{isShowIcon &&
						<span className={styles.icon}>
							<MyImage
								src={calendarIcon}
								alt="Calendar Icon"
							/>
						</span>
					}
					<MyTooltip
						isDates
						tooltipDates={DataTooltipDates}
						classTooltipWrapper={classTooltipWrapper}
						classTooltipText={classTooltipText}
					>
						<span className={classNames(classNameText, styles.text)}>
							01.03.23 - 08.03.23
						</span>
					</MyTooltip>
					<span className={classNames(classNameArrow, styles.arrow)}>
						<MyImage
							src={arrowIcon}
							alt="Arrow Icon"
						/>
					</span>
				</div>

			}
		</>
	)
}
