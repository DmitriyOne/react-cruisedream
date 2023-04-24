import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { MyTooltip } from '@crdr/plugins'
import { MyImage } from '@crdr/ui'

import { DataShowRoutes } from './data/show-routes'
import { DataTooltipRoutes } from './data/tooltip-route'
import markerIcon from './icons/marker.svg'

import styles from './cruise-route.module.scss'

interface IProps {
	classComponent?: string
	classText?: string
	classIcon?: string
	classTooltipWrapper?: string
	classTooltipText?: string
}

export const CruiseRoute: FC<IProps> = ({
	classComponent,
	classText,
	classIcon,
	classTooltipWrapper,
	classTooltipText,
}) => {
	const [idTooltip, setIdTooltip] = useState('')

	useEffect(() => {
		setIdTooltip('my-route-tooltip-' + 1)
	}, [])

	return (
		<div className={classNames(classComponent, styles.component)}>
			<span className={classNames(classIcon, styles.icon)}>
				<MyImage
					src={markerIcon}
					alt="Marker icon"
				/>
			</span>
			<MyTooltip
				isRoutes
				tooltipRoutes={DataTooltipRoutes}
				classTooltipWrapper={classTooltipWrapper}
				classTooltipText={classTooltipText}
			>
				<ul id={idTooltip} className={styles.container}>
					{DataShowRoutes.map((breadcrumbs, idx) =>
						<li
							key={idx}
							className={classNames(styles.item, classText)}
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
