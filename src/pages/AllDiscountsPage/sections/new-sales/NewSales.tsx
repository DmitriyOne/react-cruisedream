import classNames from 'classnames'

import { Container } from '../../../../components-ui'
import { DiscountCardsSwiper } from '../../../../components/RepeaterBlocks'

import styles from './new-sales.module.scss'

export const NewSales = () => {
	return (
		<Container
			width="full"
			className={classNames(styles.component, 'pb-section')}
			tag="section"
		>
			<Container className={styles.container} direction="column">
				<DiscountCardsSwiper
					title="НОВЫЕ акции"
					isShowButtonAllDiscounts={false}
					isEveryCardButton={true}
				/>
			</Container>
		</Container>
	)
}
