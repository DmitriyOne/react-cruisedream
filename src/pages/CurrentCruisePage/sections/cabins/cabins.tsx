import { Container } from '../../../../components-ui'
import { CruiseCabins } from '../../../../components/Cruise'

import styles from './cabins.module.scss'

export const Cabins = () => {
	return (
		<Container id="cabins" width="full" className={styles.component} tag="section">
			<CruiseCabins />
		</Container>
	)
}
