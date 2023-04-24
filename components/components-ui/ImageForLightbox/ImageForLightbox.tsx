import React, { ReactNode } from 'react'
import Image from 'next/image'

export const ImageForLightbox = (slide: any): ReactNode => {

	return (
		<div style={{ width: '100%', height: '100%', position: 'relative' }}>
			<Image
				alt={slide.alt}
				src={slide.src}
				layout="fill"
				objectFit="contain"
			/>
		</div>
	)
}
