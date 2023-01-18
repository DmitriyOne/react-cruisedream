import { Container } from '../../../../components-ui'
import { CruiseOptions } from '../../../../components/Cruise'

import styles from './options.module.scss'

export const Options = () => {

	return (
		<Container id="included" width="full" className={styles.component} tag="section">
			<Container width="containerS" direction="column" align="start">
				<CruiseOptions />
			</Container>
		</Container>
	)
}
