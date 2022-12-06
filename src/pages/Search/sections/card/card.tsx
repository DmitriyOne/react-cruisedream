import { CardBody } from './card-body/card-body'
import { CardPrice } from './card-price/card-price'
import { CardSlider } from './card-slider/card-slider'

import styles from './card.module.scss'

export const Card = () => {

	return (
		<div className={styles.component}>
			<CardSlider/>
			<CardBody />
			<CardPrice />
		</div>
	)
}
