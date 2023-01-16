import classNames from 'classnames'

import { Container } from '../../../../components'
import { DiscountCardsSwiper } from '../../../../components/RepeaterBlocks'

import styles from './all-sale.module.scss'

export const AllSale = () => {
	
	return (
		<Container
			width="full"
			className={classNames( 'pt-section pb-section', styles.component)}
			tag="section"
		>
			<Container className={styles.container} direction="column">
				<DiscountCardsSwiper
					title="Все акции"
					isShowAllCards
					isShowButtonAllDiscounts={false}
					isEveryCardButton={true}
				/>
			</Container>
		</Container>
	)
}
