import markerIcon from './icons/marker.svg'

import { RouteBreadcrumbs } from './route'

import styles from './cruise-route.module.scss'

export const CruiseRoute = () => {

	return (
		<div className={styles.component}>
			<span className={styles.icon}>
				<img
					src={markerIcon}
					alt="Marker icon"
				/>
			</span>
			<ul className={styles.container}>
				{RouteBreadcrumbs.map((breadcrumbs, idx) =>
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
