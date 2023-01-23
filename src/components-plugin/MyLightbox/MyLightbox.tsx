import { FC } from 'react'

import Lightbox from 'yet-another-react-lightbox'
import { Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins'

import { useWindowSize } from '../../hooks'
import { IGalleryImage } from '../../model/interfaces'

import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import './my-lightbox.scss'

interface IProps {
	index?: number
	images: IGalleryImage[]
	isOpenGallery: boolean
	onCloseGallery: () => void
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

export const MyLightbox: FC<IProps> = ({ index = 0, images, isOpenGallery, onCloseGallery }) => {
	const { isTablet } = useWindowSize()

	return (
		<Lightbox
			index={index}
			open={isOpenGallery}
			close={onCloseGallery}
			slides={images}
			carousel={{
				imageFit: isTablet ? 'contain' : 'cover',
				padding: 0,
				spacing: isTablet ? '25%' : '10%',
			}}
			plugins={[Thumbnails, Zoom]}
			animation={{ zoom: 500 }}
			zoom={{
				...zoomParams
			}}
			styles={{
				container: {
					paddingTop: isTablet ? '40px' : '60px',
					paddingLeft: isTablet ? '35px' : '60px',
					paddingRight: isTablet ? '35px' : '60px',
					paddingBottom: isTablet ? '40px' : '0px',
				},
			}}
		/>
	)
}
