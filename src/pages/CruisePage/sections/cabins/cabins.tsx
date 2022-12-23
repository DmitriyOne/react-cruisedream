import { Container } from '../../../../components'
import { CruiseCabins } from '../../../../components/Cruise'

import styles from './cabins.module.scss'

export const Cabins = () => {
	return (
		<Container width="full" className={styles.component}>
			<CruiseCabins />
		</Container>
	)
}
