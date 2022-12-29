import { Container } from '../../../../components'

import introSrc from './images/intro.jpg'

import styles from './intro.module.scss'

export const Intro = () => {
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
