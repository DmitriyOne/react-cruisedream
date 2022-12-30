import classNames from 'classnames'
import { FC } from 'react'
import { Button } from '../Button'
import styles from './my-gallery.module.scss'


interface IProps {
	srcBig: string
	srcSmall1: string
	srcSmall2: string
}

export const MyGallery: FC<IProps> = ({ ...image }) => {
	return (
		<>
			<div className={styles.component}>
				<div className={styles.galley}>
					<div className={classNames(styles.left, styles.imgWrapper)}>
						<img src={image.srcBig} alt="" />
					</div>

					<div className={styles.right}>
						<div className={styles.imgWrapper}>
							<img src={image.srcSmall1} alt="" />
						</div>
						<div className={styles.imgWrapper}>
							<img src={image.srcSmall2} alt="" />
							<Button className={styles.button}>
								ВСЕ ФОТО
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
