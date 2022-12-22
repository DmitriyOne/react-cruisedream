import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { ICruiseRoute } from '../../../model/interfaces'

import markerIcon from './icons/marker.svg'

import styles from './cruise-route.module.scss'
import { MyTooltip } from '../../MyTooltip'
import { DataTooltipRoutes } from './data/tooltip-route'
import { DataShowRoutes } from './data/show-routes'

interface IProps {
	// id?: string
	// routes: ICruiseRoute[]
	classComponent?: string
}

export const CruiseRoute: FC<IProps> = ({ classComponent }) => {
	const [idTooltip, setIdTooltip] = useState('')

	useEffect(() => {
		setIdTooltip('my-route-tooltip-' + 1)
	}, [])

	return (
		<div className={classNames(classComponent, styles.component)}>
			<span className={styles.icon}>
				<img
					src={markerIcon}
					alt="Marker icon"
				/>
			</span>
			<MyTooltip isRoutes tooltipRoutes={DataTooltipRoutes}>
				<ul id={idTooltip} className={styles.container}>
					{DataShowRoutes.map((breadcrumbs, idx) =>
						<li
							key={idx}
							className={styles.item}
						>
							{breadcrumbs.city},
							<span>
								&nbsp;{breadcrumbs.country}
							</span>
						</li>
					)}
				</ul>
			</MyTooltip>
		</div >
	)
}
