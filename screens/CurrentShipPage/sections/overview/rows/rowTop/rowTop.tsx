import { FC } from 'react'
import classNames from 'classnames'

import { useWindowSize } from '@crdr/hooks'

import { CruiseAmountDays, CruiseDates } from '@crdr/components'
import { B, Heading } from '@crdr/ui'

import styles from './row-top.module.scss'

interface IProps {
	componentClass?: string
	columnLeftClass?: string
	columnRightClass?: string
}

export const RowTop: FC<IProps> = ({
	componentClass,
	columnLeftClass,
	columnRightClass,
}) => {
	const { isMobile } = useWindowSize()

	const isShowOnDesktop = !isMobile

	return (
		<div className={componentClass}>
			<div className={columnLeftClass}>
				<Heading as="h1" className={styles.title}>
					<B fontWeight={600} >
						Жемчужины Персидского залива
					</B>
				</Heading>
			</div>
			<div className={classNames(columnRightClass, styles.laptopReverse)}>
				{isShowOnDesktop &&
					<CruiseAmountDays
						classComponent={styles.daysWrapper}
					/>
				}
				<CruiseDates
					classNameText={styles.datesText}
					classNameArrow={styles.datesArrow}
				/>
			</div>
		</div>
	)
}
