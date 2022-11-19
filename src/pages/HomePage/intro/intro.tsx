import { Container } from '../../../components'
import { Background } from './background/background'

import { IntroContext } from './context/context'

import styles from './intro.module.scss'

export const Intro = () => {
	return (
		<Container
			width="full"
			className={styles.component}
		>
			<Background />
			<Container className={styles.container}>
				<IntroContext />
			</Container>
		</Container>
	)
}
