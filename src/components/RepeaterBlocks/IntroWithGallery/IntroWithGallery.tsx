/* eslint-disable max-len */
import { FC } from 'react'
import classNames from 'classnames'

import { IGallery } from '../../../model/interfaces'
import { useWindowSize } from '../../../hooks'

import { Container, Heading } from '../../../components-ui'
import { MyGallery } from '../../../components-plugin'

import styles from './intro-with-gallery.module.scss'


export const IntroWithGallery: FC<IGallery> = ({ ...gallery }) => {
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
				<p className={styles.subtitle}>
					{gallery.desc}
				</p>
			</Container>
			<Container width="containerS">
				<MyGallery {...gallery} />
			</Container>
		</Container>
	)
}
