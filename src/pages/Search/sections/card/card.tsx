import { CardBody } from './card-body/card-body'
import { CardPrice } from './card-price/card-price'
import { CardSlider } from './card-slider/card-slider'

import styles from './card.module.scss'

export const Card = () => {

	return (
		<div className={styles.component}>
			<CardSlider />
			<div className={styles.wrapper}>
				<CardBody />
				<CardPrice />
			</div>
		</div>
	)
}
