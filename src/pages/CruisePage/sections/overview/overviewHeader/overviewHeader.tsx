import { FC } from 'react'

import { Breadcrumb } from '../../../../../components'
import { CruiseNumber } from '../../../../../components/Cruise'

import styles from './overview-header.module.scss'

interface IProps {
	cruiseName: string
	id: string
}

export const OverviewHeader: FC<IProps> = ({ cruiseName, id }) => {

	return (
		<div className={styles.component}>
			<Breadcrumb
				classComponent={styles.breadcrumb}
				currentPage={cruiseName}
			/>
			<CruiseNumber id={id}  />
		</div>
	)
}
