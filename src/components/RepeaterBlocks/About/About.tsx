import { Link, useLocation } from 'react-router-dom'

import { Container } from '../../../components'
import { CRUISE_ROUTES } from '../../../constants'
import { useWindowSize } from '../../../hooks'

import styles from './about.module.scss'

export const About = () => {
	const { isMobile } = useWindowSize()
	const { pathname } = useLocation()

	if (isMobile && pathname !== '/') {
		return null
	}

	return (
		<Container width="full" className={styles.component} tag="section">
			<div className={styles.bg} />
			<Container
				direction="column"
				align="start"
			>
				<div className={styles.content}>
					<h4 className={styles.title}>
						ТЕКСТ О ПРЕИМУЩЕСТВАХ КРУИЗНОЙ КОМПАНИИ
					</h4>
					<p className={styles.description}>
						В первоначальном значении <br />
						Круиз - морское путешествие
					</p>
					<Link to={`/${CRUISE_ROUTES.EMPTY}`} className={styles.button}>
						ПОДРОБНЕЕ
					</Link>
				</div>
			</Container>
		</Container>
	)
}
