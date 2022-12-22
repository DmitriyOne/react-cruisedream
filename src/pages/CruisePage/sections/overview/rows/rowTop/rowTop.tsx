import { FC } from 'react'
import classNames from 'classnames'

import { useWindowSize } from '../../../../../../hooks'

import { Heading, B } from '../../../../../../components'
import { CruiseAmountDays, CruiseDates } from '../../../../../../components/Cruise'

import styles from './row-top.module.scss'

interface IProps {
	componentClass?: string
	columnLeftClass?: string
	columnRightClass?: string
	cruiseName: string
	days: number
	datepicker: string
	otherDates?: string[]
}

export const RowTop: FC<IProps> = ({
	componentClass,
	columnLeftClass,
	columnRightClass,
	cruiseName,
	days,
	datepicker,
	otherDates
}) => {
	const { isMobile } = useWindowSize()

	const isShowOnDesktop = !isMobile

	return (
		<div className={componentClass}>
			<div className={columnLeftClass}>
				<Heading as="h1" className={styles.title}>
					<B fontWeight={600} >
						{cruiseName}
					</B>
				</Heading>
			</div>
			<div className={classNames(columnRightClass, styles.laptopReverse)}>
				{isShowOnDesktop &&
					<CruiseAmountDays
						className={styles.daysWrapper}
						days={days}
					/>
				}
				<CruiseDates
					classNameText={styles.datesText}
					classNameArrow={styles.datesArrow}
					datepicker={datepicker}
					otherDates={otherDates}
				/>
			</div>
		</div>
	)
}
