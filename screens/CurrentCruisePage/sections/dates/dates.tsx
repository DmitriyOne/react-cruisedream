import { CruiseChooseDate, CruiseCountPassengers } from '@crdr/components'
import { Container, Heading } from '@crdr/ui'

import styles from './dates.module.scss'

export const Dates = () => {
	return (
		<Container id="cabins-dates" width="full" className={styles.component} tag="section">
			<Container width="containerS" direction="column" align="start">
				<Heading as="h3" className={styles.title}>
					КАЮТЫ И ЦЕНЫ
				</Heading>
				<CruiseChooseDate />
				<CruiseCountPassengers />
			</Container>
		</Container>
	)
}
