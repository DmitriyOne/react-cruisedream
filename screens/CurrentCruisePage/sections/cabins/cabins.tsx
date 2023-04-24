import { CruiseCabins } from '@crdr/components'
import { Container } from '@crdr/ui'

import styles from './cabins.module.scss'

export const Cabins = () => {
	return (
		<Container id="cabins" width="full" className={styles.component} tag="section">
			<CruiseCabins />
		</Container>
	)
}
