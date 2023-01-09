import classNames from 'classnames'
import { FC } from 'react'

import { useOpen } from '../../hooks'
import { IGalleryImage } from '../../model/interfaces'
import { Button, MyLightbox } from '../../components'

import styles from './my-gallery.module.scss'

interface IProps {
	images: IGalleryImage[]
}

export const MyGallery: FC<IProps> = ({ ...gallery }) => {
	const { isOpen: isOpenGallery, onOpen: onOpenGallery, onClose: onCloseGallery } = useOpen()

	return (
		<>
			<div className={styles.component}>
				<div className={classNames(styles.left, styles.imgWrapper)}>
					<img src={gallery.images[0].src} alt="" />
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
