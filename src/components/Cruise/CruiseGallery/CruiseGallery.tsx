import { FC } from 'react'

import img1Src from './images/1.jpg'
import img2Src from './images/2.jpg'
import img3Src from './images/3.jpg'

import styles from './cruise-gallery.module.scss'
import { CruiseLabel } from '../CruiseLabel/CruiseLabel'
import { Button } from '../../Button'
import classNames from 'classnames'

interface IProps {
	label: string
}

export const CruiseGallery: FC<IProps> = ({ label }) => {
	return (
		<div className={styles.component}>
			<div className={styles.galley}>
				<div className={classNames(styles.left, styles.imgWrapper)}>
					<img src={img1Src} alt="Ship" />
					<CruiseLabel label={label} />
				</div>

				<div className={styles.right}>
					<div className={styles.imgWrapper}>
						<img src={img2Src} alt="Ship" />
					</div>
					<div className={styles.imgWrapper}>
						<img src={img3Src} alt="Ship" />
						<Button className={styles.button}>
							ВСЕ ФОТО
						</Button>
					</div>
				</div>
				
			</div>
		</div>
	)
}
