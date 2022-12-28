/* eslint-disable max-len */
import classNames from 'classnames'
import { B, Container, Heading, MyGallery } from '../../../../components'

import galleryImg1 from '../../../../assets/images/single-region/1.jpg'
import galleryImg2 from '../../../../assets/images/single-region/2.jpg'
import galleryImg3 from '../../../../assets/images/single-region/3.jpg'

import styles from './intro.module.scss'
import { useWindowSize } from '../../../../hooks'

const galleryImages = {
	srcBig: galleryImg1,
	srcSmall1: galleryImg2,
	srcSmall2: galleryImg3,
}

export const Intro = () => {
	const { isMobile } = useWindowSize()

	const direction = isMobile ? 'columnReverse' : 'column'
	return (
		<Container
			width="full"
			className={classNames(styles.component, 'pt-section pb-section')}
			direction={direction}
			tag="section"
		>
			<Container direction="column" className={styles.content}>
				<Heading as="h1" className="title">
					КРУИЗЫ ПО СРЕДИЗЕМНОМУ МОРЮ
				</Heading>
				<p className={styles.subtitle}>
					From the pure white sand beaches of the Caribbean to the fascinating architecture of the <B fontWeight={700}> Mediterranean,</B> the natural beauty of <B fontWeight={700}> Norway to </B>the diverse culture of the <B fontWeight={700}> Canary Islands,</B> you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.
				</p>
			</Container>
			<Container width="containerS">
				<MyGallery {...galleryImages} />
			</Container>
		</Container>
	)
}
