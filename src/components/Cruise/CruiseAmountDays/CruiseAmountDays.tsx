import styles from './cruise-amount-days.module.scss'

export const CruiseAmountDays = () => {

	return (
		<div className={styles.component}>
			<span className={styles.days}>
				7
			</span>
			<span className={styles.text}>
				ночей
			</span>
		</div>
	)
}
