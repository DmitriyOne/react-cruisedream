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
						className={styles.daysWrapper}
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
