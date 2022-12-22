import { useState } from 'react'

import { AccordionTable } from '../../../../../components'
import { DataRouteList } from '../data/route-list'

import styles from './route-list.module.scss'

export const RouteList = () => {
	const [activeId, setActive] = useState<number | null>(null)

	const handleToggle = (idx: number) => {
		if (activeId === idx) {
			setActive(null)
		} else {
			setActive(idx)
		}
	}
	return (
		<div className={styles.component}>
			<AccordionTable
				handleToggle={handleToggle}
				body={DataRouteList}
				activeId={activeId}
			/>
		</div>
	)
}
