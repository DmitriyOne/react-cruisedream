import { useState } from 'react'

import { Breadcrumb, Container } from '../../../../components'
import { CruiseGallery } from '../../../../components/Cruise'
import { DataSingleCruise } from '../../../../fakedata/data-single-cruise'

import styles from './overview.module.scss'

export const Overview = () => {
	const [cruise, setCruise] = useState(DataSingleCruise)

	return (
		<Container width="full" className={styles.component}>
			<Container width="containerS" direction="column" align="start">

				<div className={styles.header}>
					<Breadcrumb currentPage={cruise.cruiseName} />
					<div className={styles.numberCruise}>
						Номер круиза {cruise.id}
					</div>
				</div>

				<CruiseGallery label={cruise.label} />
			</Container>
		</Container>
	)
}
