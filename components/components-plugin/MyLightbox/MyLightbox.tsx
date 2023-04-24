import { FC } from 'react'
import dynamic from 'next/dynamic'
import { LightboxExternalProps } from 'yet-another-react-lightbox'
import { Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins'

import { useWindowSize } from '@crdr/hooks'

import { IImage } from '@crdr/interfaces'

import { ImageForLightbox, ThumbnailForLightbox } from '@crdr/ui'
const Lightbox = dynamic(() => import('yet-another-react-lightbox').then((module) => module.Lightbox), {
	ssr: false,
})

interface IProps extends LightboxExternalProps {
	index?: number
	images: IImage[]
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

export const MyLightbox: FC<IProps> = ({ index = 0, images, isOpenGallery, onCloseGallery, ...props }) => {
	const { isTablet } = useWindowSize()

	const slides = images?.map(item => ({
		src: item.src,
		alt: item.alt,
		width: 3200,
		height: 800,
	}))

	return (
		<Lightbox
			index={index}
			open={isOpenGallery}
			close={onCloseGallery}
			carousel={{
				imageFit: isTablet ? 'contain' : 'cover',
				padding: 0,
				spacing: isTablet ? '25%' : '10%',
			}}
			plugins={[Thumbnails, Zoom]}
			animation={{ zoom: 500 }}
			zoom={{
				...zoomParams,
			}}
			slides={slides}
			render={{
				slide: ImageForLightbox,
				thumbnail: ThumbnailForLightbox,
			}}
			styles={{
				container: {
					paddingTop: isTablet ? '40px' : '60px',
					paddingLeft: isTablet ? '35px' : '60px',
					paddingRight: isTablet ? '35px' : '60px',
					paddingBottom: isTablet ? '40px' : '0px',
				},
			}}
			{...props}
		/>
	)
}
