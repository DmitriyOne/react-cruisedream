import { CardCenter } from './card-center/card-center'
import { CardLeft } from './card-left/card-left'
import { CardRight } from './card-right/card-right'

import styles from './card.module.scss'

export const Card = () => {

	return (
		<div className={styles.component}>
			<CardLeft />
			<CardCenter />
			<CardRight />
		</div>
	)
}
