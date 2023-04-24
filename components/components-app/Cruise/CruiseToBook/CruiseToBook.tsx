import { ShipName,Timer } from '@crdr/components'
import { Button } from '@crdr/ui'

import styles from './cruise-to-book.module.scss'

export const CruiseToBook = () => {

	return (
		<>
			<Timer
				classComponent={styles.timer}
				classNumber={styles.timerNumber}
				deadline="01 March 2023"
			/>
			<div className={styles.contentWrapper}>
				<ShipName
					classComponent={styles.shipWrapper}
					classNameText={styles.shipName}
					isBookTo
				/>
				<p className={styles.text}>
					<span className={styles.uppercase}>
						ЗАБРОНИРУЙТЕ СЕГОДНЯ И
						ПОЛУЧИТЕ СКИДКУ 30%
					</span>
					&nbsp;
					на следующее бронирование
				</p>
			</div>
			<Button className={styles.button}>
				ЗАБРОНИРОВАТЬ
			</Button>
		</>
	)
}
