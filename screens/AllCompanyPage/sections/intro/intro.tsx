import { useWindowSize } from '@crdr/hooks'

import { Container, MyImage } from '@crdr/ui'

import introSrc from './images/intro.jpg'

import styles from './intro.module.scss'

export const Intro = () => {
	const { isMobile } = useWindowSize()

	if (isMobile) {
		return null
	}

	return (
		<Container
			width="full"
			direction="column"
			tag="section"
		>
			<div className={styles.imageWrapper}>
				<MyImage
					src={introSrc}
					alt="All ships"
				/>
			</div>
		</Container>
	)
}
