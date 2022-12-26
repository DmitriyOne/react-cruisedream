import { Container } from '../../../../components'
import { CruiseCabins } from '../../../../components/Cruise'

import styles from './cabins.module.scss'

export const Cabins = () => {
	return (
		<Container id="cabins" width="full" className={styles.component}>
			<CruiseCabins />
		</Container>
	)
}
