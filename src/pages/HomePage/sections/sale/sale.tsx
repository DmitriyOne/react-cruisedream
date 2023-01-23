import { Container } from '../../../../components-ui'
import { DiscountCardsSwiper } from '../../../../components/RepeaterBlocks'

import styles from './sale.module.scss'

export const Sale = () => {
	return (
		<Container
			width="full"
			className={styles.component}
			tag="section"
		>
			<Container className={styles.container} direction="column">
				<DiscountCardsSwiper title="акции" isShowAllCards={false} />
			</Container>
		</Container>
	)
}
