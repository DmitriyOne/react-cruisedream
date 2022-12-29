import { ShipDesc, ShipLinks, ShipInfo, ShipName } from '../../../../../components/Ship'

import styles from './description.module.scss'

export const Description = () => {

	return (
		<div className={styles.component}>
			<div className={styles.wrapper}>
				<ShipName
					classNameText={styles.title}
					isDesc
				/>
				<ShipInfo
				/>
				<ShipDesc  />
			</div>
			<ShipLinks />
		</div >
	)
}
