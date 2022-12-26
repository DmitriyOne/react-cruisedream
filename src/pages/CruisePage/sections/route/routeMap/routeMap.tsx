import imgMapSrc from '../images/map.jpg'

import styles from './route-map.module.scss'

export const RouteMap = () => {
	return (
		<div className={styles.component}>
			<img
				src={imgMapSrc}
				alt="Your map"
			/>
		</div>
	)
}
