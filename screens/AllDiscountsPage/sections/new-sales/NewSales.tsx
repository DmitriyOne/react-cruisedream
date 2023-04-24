import classNames from 'classnames'

import { SwiperDiscountCards } from '@crdr/components'
import { Container } from '@crdr/ui'

import styles from './new-sales.module.scss'

export const NewSales = () => {
	return (
		<Container
			width="full"
			className={classNames(styles.component, 'pb-section')}
			tag="section"
		>
			<Container className={styles.container} direction="column">
				<SwiperDiscountCards
					title="НОВЫЕ акции"
					isNewSales
				/>
			</Container>
		</Container>
	)
}
