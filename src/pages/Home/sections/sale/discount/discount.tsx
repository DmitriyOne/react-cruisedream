import { FC } from 'react'
import styles from './discount.module.scss'

interface IProps {
	percentage?: number
}

export const Discount:FC<IProps> = ({
	percentage
}) => {
	return (
		<div className={styles.component}>
			<span className={styles.text}>
				{percentage}%
			</span>
		</div>
	)
}
