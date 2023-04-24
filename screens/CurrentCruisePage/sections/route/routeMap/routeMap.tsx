import { MyImage } from '@crdr/ui'

import imgMapSrc from '../images/map.jpg'

import styles from './route-map.module.scss'

export const RouteMap = () => {

	return (
		<div className={styles.component}>
			<MyImage
				src={imgMapSrc}
				alt="Your map"
			/>
		</div>
	)
}
