import { Button, Container, Heading } from '../../../../components'
import { CRUISE_ROUTES } from '../../../../constants'
import { SaleCard } from './sale-card/sale-card'

import styles from './sale.module.scss'

export const Sale = () => {
	return (
		<Container width="full" className={styles.component}>
			<Container className={styles.container} direction="column">
				<Heading as="h3" className={styles.title}>
					АКЦИИ
				</Heading>
				<SaleCard />
				<Button
					className={styles.button}
					reactHref={CRUISE_ROUTES.SALE}
				>
					ВСЕ АКЦИИ
				</Button>
			</Container>
		</Container>
	)
}
