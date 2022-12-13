import { FC } from 'react'

import styles from './cruise-amount-days.module.scss'

interface IProps {
	days: number
}

export const CruiseAmountDays:FC<IProps> = ({days}) => {

	return (
		<div className={styles.component}>
			<span className={styles.days}>
				{days}
			</span>
			<span className={styles.text}>
				ночей
			</span>
		</div>
	)
}
