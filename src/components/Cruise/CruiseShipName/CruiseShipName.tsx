import { Heading } from '../../Headings'

import shipIcon from './icons/ship.svg'

import styles from './cruise-ship-name.module.scss'

export const CruiseShipName = () => {

	return (
		<div className={styles.component}>
			<span className={styles.icon}>
				<img
					src={shipIcon}
					alt="Celebrity Flora"
				/>
			</span>
			<Heading as="h4" className={styles.title}>
				Celebrity Flora
			</Heading>
		</div>
	)
}
