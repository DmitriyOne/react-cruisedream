import { Container, Heading } from '../../../../components'
import { CruiseSliderDates } from '../../../../components/Cruise'

import styles from './cabins.module.scss'

export const Cabins = () => {
	return (
		<Container width="full" className={styles.component}>
			<Container width="containerS" direction="column" align="start">
				<Heading as="h3" className={styles.title}>
					КАЮТЫ И ЦЕНЫ
				</Heading>
				<CruiseSliderDates />
			</Container>
		</Container>
	)
}
