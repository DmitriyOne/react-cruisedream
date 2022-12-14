import classNames from 'classnames'
import { FC } from 'react'

import styles from './cruise-amount-days.module.scss'

interface IProps {
	days: number
	className?: string
}

export const CruiseAmountDays:FC<IProps> = ({days, className}) => {

	return (
		<div className={classNames(className, styles.component)}>
			<span className={styles.days}>
				{days}
			</span>
			<span className={styles.text}>
				ночей
			</span>
		</div>
	)
}
