import { FC } from 'react'

import { ICruiseRoute } from '../../../model/interfaces'

import markerIcon from './icons/marker.svg'

import styles from './cruise-route.module.scss'

interface IProps {
	routes: ICruiseRoute[]
}

export const CruiseRoute:FC<IProps> = ({routes}) => {

	return (
		<div className={styles.component}>
			<span className={styles.icon}>
				<img
					src={markerIcon}
					alt="Marker icon"
				/>
			</span>
			<ul className={styles.container}>
				{routes.map((breadcrumbs, idx) =>
					<li
						key={idx}
						className={styles.item}
					>
						{breadcrumbs.city},
						<span>
							&nbsp;{breadcrumbs.country}
						</span>
						<span className={styles.slash}>
							&nbsp;/&nbsp;
						</span>
					</li>
				)}
			</ul>
		</div>
	)
}
