import { CruiseOptions } from '@crdr/components'
import { Container } from '@crdr/ui'

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
