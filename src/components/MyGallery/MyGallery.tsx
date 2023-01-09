import classNames from 'classnames'
import { FC } from 'react'

import { useOpen, useWindowSize } from '../../hooks'
import { IGalleryImage } from '../../model/interfaces'
import { Button, Discount, MyLightbox } from '../../components'

import styles from './my-gallery.module.scss'
import { CruiseAmountDays, CruiseLabel } from '../Cruise'

interface IProps {
	images: IGalleryImage[]
	isCruisePage?: boolean
}

export const MyGallery: FC<IProps> = ({ isCruisePage = false, ...gallery }) => {
	const { isOpen: isOpenGallery, onOpen: onOpenGallery, onClose: onCloseGallery } = useOpen()
	const { isMobile } = useWindowSize()

	return (
		<>
			<div className={styles.component}>
				<div className={classNames(styles.left, styles.imgWrapper)}>
					<img src={gallery.images[0].src} alt="" />

					{isCruisePage &&
						<>
							<Discount
								percentage={25}
								className={styles.discount}
								classNameText={styles.discountText}
								classNamePercentage={styles.discountPercentage}
							/>
							{isMobile
								?
								<CruiseAmountDays />
								:
								<CruiseLabel />
							}
						</>
					}
				</div>

				<div className={styles.right}>
					<div className={styles.imgWrapper}>
						<img src={gallery.images[1].src} alt="" />
					</div>
					<div className={styles.imgWrapper}>
						<img src={gallery.images[2].src} alt="" />
					</div>
				</div>

				<Button className={styles.button} onClick={onOpenGallery}>
					ВСЕ ФОТО
				</Button>
			</div>

			<MyLightbox
				isOpenGallery={isOpenGallery}
				onCloseGallery={onCloseGallery}
				images={gallery.images}
			/>
		</>
	)
}
