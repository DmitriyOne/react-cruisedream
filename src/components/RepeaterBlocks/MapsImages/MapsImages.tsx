import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { CRUISE_MAP } from '../../../constants'

import { useWindowSize } from '../../../hooks'
import { B } from '../../B'

import mapImage from './images/map.svg'

import styles from './maps-images.module.scss'

export const MapsImages = () => {
	const { isMobile } = useWindowSize()

	if (isMobile) {
		return null
	}

	return (
		<div className={styles.component}>
			<div className={styles.imageWrapper}>
				<img
					className={styles.image}
					src={mapImage}
					alt="Map"
				/>
				<div className={styles.buttonWrapper}>
					<Link
						to={CRUISE_MAP.aroundTheWorld}
						className={classNames(styles.button, styles.aroundWorld)}
					>
						<B fontWeight={700}>
							КРУГОСВЕТНОЕ ПУТЕШЕСТВИЕ
						</B>
					</Link>
					
					{/* first row */}
					<Link
						to={CRUISE_MAP.northAmerica}
						className={classNames(styles.button, styles.northAmerica)}
					>
						СЕВЕРНАЯ АМЕРИКА
					</Link>
					<Link
						to={CRUISE_MAP.europe}
						className={classNames(styles.button, styles.europe)}
					>
						ЕВРОПА
					</Link>
					<Link
						to={CRUISE_MAP.asiaFarEast}
						className={classNames(styles.button, styles.asiaFarEast)}
					>
						АЗИЯ ДАЛЬНИЙ ВОСТОК
					</Link>
					<Link
						to={CRUISE_MAP.mediterranean}
						className={classNames(styles.button, styles.mediterranean)}
					>
						СРЕДИЗЕМНОЕ МОРЕ
					</Link>

					{/* second row */}
					<Link
						to={CRUISE_MAP.centerAmericaAndPanamaCanal}
						className={classNames(styles.button, styles.centerAmericaAndPanamaCanal)}
					>
						АМЕРИКА И ПАНАМСКИЙ КАНАЛ
					</Link>
					<Link
						to={CRUISE_MAP.africaAndMidEast}
						className={classNames(styles.button, styles.africaAndMidEast)}
					>
						АФРИКА И СРЕДНИЙ ВОСТОК
					</Link>
					<Link
						to={CRUISE_MAP.pacificIslandsAndHawaii}
						className={classNames(styles.button, styles.pacificIslandsAndHawaii)}
					>
						ОСТРОВА ТИХОГО ОКЕАНА И ГАВАИ
					</Link>

					{/* third row */}
					<Link
						to={CRUISE_MAP.southAmericaAndGalapagos}
						className={classNames(styles.button, styles.southAmericaAndGalapagos)}
					>
						ЮжНАЯ АМЕРИКА и ГАЛАПАГОСЫ
					</Link>
					<Link
						to={CRUISE_MAP.atlanticIslands}
						className={classNames(styles.button, styles.atlanticIslands)}
					>
						АТЛАНТИЧЕСКИЕ ОСТРОВА
					</Link>
					<Link
						to={CRUISE_MAP.indianOcean}
						className={classNames(styles.button, styles.indianOcean)}
					>
						ИНДИЙСКИЙ ОКЕАН
					</Link>
					<Link
						to={CRUISE_MAP.australiaAndNewZealand}
						className={classNames(styles.button, styles.australiaAndNewZealand)}
					>
						АВСТРАЛИЯ НОВАЯ ЗЕЛАНДИЯ
					</Link>

					<Link
						to={CRUISE_MAP.popularRegions}
						className={classNames(styles.button, styles.popularRegions)}
					>
						<B fontWeight={700}>
							ПОЛЯРНЫЕ РЕГИОНЫ
						</B>
					</Link>
				</div>
			</div>
		</div>
	)
}
