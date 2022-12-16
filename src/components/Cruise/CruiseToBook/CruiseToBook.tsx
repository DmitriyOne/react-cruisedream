import { FC } from 'react'

import { Button } from '../../../components'
import { ShipName } from '../../Ship'
import { CruiseTimer } from '../CruiseTimer/CruiseTimer'

import styles from './cruise-to-book.module.scss'

interface IProps {
	shipName: string
	deadline: string
}

export const CruiseToBook: FC<IProps> = ({ shipName, deadline }) => {

	return (
		<>
			<ShipName
				classComponent={styles.shipWrapper}
				classNameText={styles.shipName}
				name={shipName}
				isBookTo
			/>
			<div className={styles.row}>
				<CruiseTimer deadline={deadline} />
				<p className={styles.text}>
					<span className={styles.uppercase}>
						ЗАБРОНИРУЙТЕ СЕГОДНЯ И
						ПОЛУЧИТЕ СКИДКУ 30%
					</span>
					&nbsp;
					на следующее бронирование
				</p>
				<Button className={styles.button}>
					ЗАБРОНИРОВАТЬ
				</Button>
			</div>
		</>
	)
}
