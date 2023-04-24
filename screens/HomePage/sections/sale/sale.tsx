import { SwiperDiscountCards } from '@crdr/components'
import { Container } from '@crdr/ui'

import styles from './sale.module.scss'

export const Sale = () => {

	return (
		<Container
			width="full"
			className={styles.component}
			tag="section"
		>
			<Container className={styles.container} direction="column">
				<SwiperDiscountCards title="акции" isArrowIndentEdge isSwiperIndentMobile />
			</Container>
		</Container>
	)
}
