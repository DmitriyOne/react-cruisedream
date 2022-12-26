import classNames from 'classnames'

import { useWindowSize } from '../../../hooks'
import { CruiseLabel } from '../CruiseLabel/CruiseLabel'
import { CruiseAmountDays } from '../CruiseAmountDays/CruiseAmountDays'
import { Button, Discount } from '../../../components'

import img1Src from './images/1.jpg'
import img2Src from './images/2.jpg'
import img3Src from './images/3.jpg'

import styles from './cruise-gallery.module.scss'

export const CruiseGallery = () => {
	const { isMobile } = useWindowSize()

	const isShowOnDesktop = !isMobile
	const isShowOnMobile = isMobile
	return (
		<div className={styles.component}>
			<div className={styles.galley}>
				<div className={classNames(styles.left, styles.imgWrapper)}>
					<img src={img1Src} alt="Ship" />
					{isShowOnDesktop && <CruiseLabel />}
					<Discount
						percentage={25}
						className={styles.discount}
						classNameText={styles.discountText}
						classNamePercentage={styles.discountPercentage}
					/>
					{isShowOnMobile &&
						<CruiseAmountDays
							className={styles.daysWrapper}
						/>
					}
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
