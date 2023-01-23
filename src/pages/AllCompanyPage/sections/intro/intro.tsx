import { Container } from '../../../../components-ui'
import { useWindowSize } from '../../../../hooks'

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
				<img src={introSrc} alt="" />
			</div>
		</Container>
	)
}
