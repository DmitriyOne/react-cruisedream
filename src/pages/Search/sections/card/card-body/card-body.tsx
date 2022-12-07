import { useWindowSize } from '../../../../../hooks'
import { Heading } from '../../../../../components'

import { IconIncludedCruise } from './icons'
import { RouteBreadcrumbs } from './data-card-body'

import shipIcon from '../icons/ship.svg'
import markerIcon from '../icons/marker.svg'
import arrowIcon from '../icons/arrow-down.svg'
import calendarIcon from '../icons/calendar.svg'
import logoImage from '../../../../../assets/images/partners/partner-celebrity.png'

import styles from './card-body.module.scss'

export const CardBody = () => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>

			<div className={styles.header}>
				{isMobile
					?
					<div className={styles.headerLogo}>
						<img
							src={logoImage}
							alt="Logo Caribbean"
						/>
					</div>
					:
					<div className={styles.headerDays}>
						<span className={styles.headerDaysTitle}>
							7
						</span>
						<span className={styles.headerDaysSubTitle}>
							ночей
						</span>
					</div>
				}
				<div className={styles.headerWrapper}>
					<Heading as="h3" className={styles.headerTitle}>
						По Карибскому
						морю с CRUISEDREAM
					</Heading>
					<div className={styles.headerDates}>
						{isMobile &&
							<span className={styles.headerDatesIcon}>
								<img
									src={calendarIcon}
									alt="Calendar Icon"
								/>
							</span>
						}
						01.03.22 - 08.03.23
						<span className={styles.headerDatesArrow}>
							<img
								src={arrowIcon}
								alt="Arrow Icon"
							/>
						</span>
					</div>
				</div>
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
									&nbsp;{breadcrumbs.country}
								</span>
								<span className={styles.slash}>
									&nbsp;/&nbsp;
								</span>
							</li>
						)}
					</ul>
				</div>
			</div>

			{!isMobile &&
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
			}
		</div>
	)
}
