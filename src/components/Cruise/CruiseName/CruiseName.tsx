import { Heading } from '../../Headings'

import styles from './cruise-name.module.scss'

export const CruiseName = () => {

	return (
		<Heading as="h3" className={styles.component}>
			По Карибскому
			морю с CRUISEDREAM
		</Heading>
	)
}
