import React, { ReactNode } from 'react'
import Image from 'next/image'

export const ThumbnailForLightbox = ({ slide }:
	{ slide: any, rect: any, render: any, imageFit: any }): ReactNode => {

	return (
		<Image
			alt=""
			layout="fill"
			src={slide.src}
		/>
	)
}
