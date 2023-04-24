import classNames from 'classnames'

import { SwiperDiscountCards } from '@crdr/components'
import { Container } from '@crdr/ui'

import styles from './all-sale.module.scss'

export const AllSale = () => {

	return (
		<Container
			width="full"
			className={classNames('pt-section pb-section', styles.component)}
			tag="section"
		>
			<Container className={styles.container} direction="column">
				<SwiperDiscountCards
					title="Все акции"
				/>
			</Container>
		</Container>
	)
}
