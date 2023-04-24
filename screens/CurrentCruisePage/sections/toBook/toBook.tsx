import { CruiseToBook } from '@crdr/components'
import { Container } from '@crdr/ui'

import styles from './to-book.module.scss'

export const ToBook = () => {

	return (
		<Container width="full" className={styles.component} tag="section">
			<Container width="containerS" justify="between" className={styles.container}>
				<CruiseToBook />
			</Container>
		</Container>
	)
}
