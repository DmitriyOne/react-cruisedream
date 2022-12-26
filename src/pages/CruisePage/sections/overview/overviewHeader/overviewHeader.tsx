import { Breadcrumb } from '../../../../../components'
import { CruiseNumber } from '../../../../../components/Cruise'

import styles from './overview-header.module.scss'

export const OverviewHeader = () => {

	return (
		<div className={styles.component}>
			<Breadcrumb
				classComponent={styles.breadcrumb}
				currentPage="Жемчужины Персидского залива"
			/>
			<CruiseNumber />
		</div>
	)
}
