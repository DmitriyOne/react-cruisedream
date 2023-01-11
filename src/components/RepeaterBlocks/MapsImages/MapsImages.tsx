import { useWindowSize } from '../../../hooks'

import mapImage from './images/map.jpg'

import styles from './maps-images.module.scss'

export const MapsImages = () => {
	const { isMobile } = useWindowSize()

	if (isMobile) {
		return null
	}
	
	return (
		<div className={styles.component}>
			<img
				className={styles.img}
				src={mapImage}
				alt="Map"
			/>
		</div>
	)
}
