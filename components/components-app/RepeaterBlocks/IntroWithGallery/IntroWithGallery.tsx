/* eslint-disable max-len */
import { FC } from 'react'
import classNames from 'classnames'

import { useWindowSize } from '@crdr/hooks'

import { IGalleryIntro } from '@crdr/interfaces'

import { SwiperGallery } from '@crdr/components'
import { Container, Heading } from '@crdr/ui'

import styles from './intro-with-gallery.module.scss'

export const IntroWithGallery: FC<IGalleryIntro> = ({ ...gallery }) => {
	const { isMobile } = useWindowSize()

	const direction = isMobile ? 'columnReverse' : 'column'
	return (
		<Container
			id="review"
			width="full"
			className={classNames(styles.component, 'pt-section')}
			direction={direction}
			tag="section"
		>
			<Container direction="column" className={styles.content}>
				<Heading as="h1" className="title">
					{gallery.title}
				</Heading>
				<div
					className={styles.subtitle}
					dangerouslySetInnerHTML={{ __html: gallery.desc }}
				/>
			</Container>
			<Container width="containerS">
				<SwiperGallery {...gallery} />
			</Container>
		</Container>
	)
}
