import { Heading } from '../../../../../components'

import { IconIncludedCruise } from './icons'
import { RouteBreadcrumbs } from './data-card-body'

import shipIcon from '../icons/ship.svg'
import markerIcon from '../icons/marker.svg'

import styles from './card-body.module.scss'

export const CardBody = () => {
	return (
		<div className={styles.component}>

			<div className={styles.header}>

			</div>

			<div className={styles.body}>
				<div className={styles.shipWrapper}>
					<span className={styles.shipIcon}>
						<img
							src={shipIcon}
							alt="Celebrity Flora"
						/>
					</span>
					<Heading as="h4" className={styles.shipTitle}>
						Celebrity Flora
					</Heading>
				</div>
				<div className={styles.breadcrumb}>
					<span className={styles.breadcrumbIcon}>
						<img
							src={markerIcon}
							alt="Marker icon"
						/>
					</span>
					<ul className={styles.breadcrumbWrapper}>
						{RouteBreadcrumbs.map((breadcrumbs, idx) =>
							<li key={idx} className={styles.breadcrumbsItem}>
								{breadcrumbs.city},
								<span>
									&nbsp;{breadcrumbs.country}&nbsp;/&nbsp;
								</span>
							</li>
						)}
					</ul>
				</div>
			</div>

			<ul className={styles.footer}>
				{IconIncludedCruise.map((icon =>
					<li
						key={icon.title}
						className={styles.footerItem}
					>
						<span className={styles.footerIcon}>
							<img
								src={icon.src}
								alt={icon.alt}
							/>
						</span>
						<Heading
							as="h5"
							align="center"
							className={styles.footerTitle}
						>
							{icon.title}
						</Heading>
					</li>
				))}
			</ul>
		</div>
	)
}
