import { FC } from 'react'
import classNames from 'classnames'

import styles from './cruise-amount-days.module.scss'

interface IProps {
	classComponent?: string
	classNumber?: string
	classText?: string
}

export const CruiseAmountDays: FC<IProps> = ({ classComponent, classNumber, classText }) => {
	return (
		<div className={classNames(classComponent, styles.component)}>
			<span className={classNames(classNumber, styles.days)}>
				7
			</span>
			<span className={classNames(classText, styles.text)}>
				ночей
			</span>
		</div >
	)
}
