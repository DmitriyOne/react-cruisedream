import { Link } from 'react-router-dom'

import { Container, Heading } from '../../../../components'
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
				<Link
					className={styles.link}
					to={CRUISE_ROUTES.SALE}
				>
					ВСЕ АКЦИИ
				</Link>
			</Container>
		</Container>
	)
}