import { Button, MyTimer } from '../../../components'
import { ShipName } from '../../Ship'

import styles from './cruise-to-book.module.scss'

export const CruiseToBook = () => {

	return (
		<>
			<MyTimer
				classComponent={styles.timer}
				classNumber={styles.timerNumber}
				deadline="28 Jan 2023 17:00"
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
