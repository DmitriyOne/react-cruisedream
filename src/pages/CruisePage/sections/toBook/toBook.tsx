import { Container } from '../../../../components'
import { CruiseToBook } from '../../../../components/Cruise'

import styles from './to-book.module.scss'

export const ToBook = () => {

	return (
		<Container width="full" className={styles.component}>
			<Container width="containerS" justify="between" className={styles.container}>
				<CruiseToBook />
			</Container>
		</Container>
	)
}
