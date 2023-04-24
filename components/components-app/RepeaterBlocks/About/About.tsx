import Link from 'next/link'
import { useRouter } from 'next/router'

import { CRUISE_ROUTES } from '@crdr/constants'
import { useWindowSize } from '@crdr/hooks'

import { Container } from '@crdr/ui'

import styles from './about.module.scss'

export const About = () => {
	const { isMobile } = useWindowSize()
	const router = useRouter()

	if (isMobile && router.pathname !== '/') {
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
					<Link href={`/${CRUISE_ROUTES.EMPTY}`} className={styles.button}>
						ПОДРОБНЕЕ
					</Link>
				</div>
			</Container>
		</Container>
	)
}
