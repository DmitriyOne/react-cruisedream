import { Heading } from '../../Headings'

import styles from './cruise-label.module.scss'

export const CruiseLabel = () => {

	return (
		<div className={styles.component}>
			<Heading as="h4" className={styles.title}>
				Cruisedream
			</Heading>
		</div>
	)
}
