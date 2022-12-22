import { Container } from '../../../../components'
import { ShipOptions } from '../../../../components/Ship'

import styles from './options.module.scss'

export const Options = () => {

	return (
		<Container width="full" className={styles.component}>
			<Container width="containerS" direction="column" align="start">
				<ShipOptions  />
			</Container>
		</Container>
	)
}
