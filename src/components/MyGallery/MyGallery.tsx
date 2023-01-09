import classNames from 'classnames'
import { FC } from 'react'

import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

import { useOpen, useWindowSize } from '../../hooks'
import { Button } from '../Button'
import { IGallery } from '../../model/interfaces'

import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import styles from './my-gallery.module.scss'


interface IProps {
	srcBig: string
	srcSmall1: string
	srcSmall2: string
}

const zoomParams = {
	maxZoomPixelRatio: 10,
	zoomInMultiplier: 3,
	doubleTapDelay: 300,
	doubleClickDelay: 300,
	doubleClickMaxStops: 2,
	keyboardMoveDistance: 50,
	wheelZoomDistanceFactor: 100,
	pinchZoomDistanceFactor: 100,
	scrollToZoom: true,
}

export const MyGallery: FC<IGallery> = ({ ...gallery }) => {
	const { isOpen: isOpenGallery, onOpen: onOpenGallery, onClose: onCloseGallery } = useOpen()
	const { isTablet } = useWindowSize()

	return (
		<>
			<div className={styles.component}>
				<div className={classNames(styles.left, styles.imgWrapper)}>
					<img src={gallery.galleryVisible[0].src} alt="" />
				</div>

				<div className={styles.right}>
					<div className={styles.imgWrapper}>
						<img src={gallery.galleryVisible[1].src} alt="" />
					</div>
					<div className={styles.imgWrapper}>
						<img src={gallery.galleryVisible[2].src} alt="" />
					</div>
				</div>

				<Button className={styles.button} onClick={onOpenGallery}>
					ВСЕ ФОТО
				</Button>
			</div>

			<Lightbox
				className={styles.myLightbox}
				open={isOpenGallery}
				close={onCloseGallery}
				slides={gallery.galleryHidden}
				carousel={{
					imageFit: isTablet ? 'contain' : 'cover',
					padding: 0,
					spacing: '10%',
				}}
				plugins={[Thumbnails, Zoom]}
				animation={{ zoom: 500 }}
				zoom={{
					...zoomParams
				}}
				styles={{
					container: {
						paddingTop: isTablet ? '40px' : '70px',
						paddingLeft: '20px',
						paddingRight: '20px',
					}
				}}
			/>
		</>
	)
}
