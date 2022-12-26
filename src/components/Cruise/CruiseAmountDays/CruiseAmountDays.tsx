import classNames from 'classnames'
import { FC } from 'react'

import styles from './cruise-amount-days.module.scss'

interface IProps {
	className?: string
}

export const CruiseAmountDays:FC<IProps> = ({ className}) => {
	return (
		<div className={classNames(className, styles.component)}>
			<span className={styles.days}>
				7
			</span>
			<span className={styles.text}>
				ночей
			</span>
		</div>
	)
}
