import { useState } from 'react'

import { useWindowSize } from '@crdr/hooks'

import { AccordionTable } from '@crdr/components'

import { DataRouteList } from '../data/route-list'
import { RouteMap } from '../routeMap/routeMap'

import styles from './route-list.module.scss'

export const RouteList = () => {
	const [activeId, setActive] = useState<number | null>(null)
	const { isMobile } = useWindowSize()

	const handleToggle = (idx: number) => {
		if (activeId === idx) {
			setActive(null)
		} else {
			setActive(idx)
		}
	}
	return (
		<div className={styles.component}>
			{isMobile && <RouteMap />}
			<AccordionTable
				handleToggle={handleToggle}
				body={DataRouteList}
				activeId={activeId}
			/>
		</div>
	)
}
