import { useWindowSize } from '../../hooks'
import { ROUTES_TERMS_CONDITIONS } from '../../constants'

import { Button, Container, Heading } from '../../components'
import { Content } from './Content/Content'

import styles from './terms-conditions.module.scss'

export const TermsConditions = () => {
	const { isMobile } = useWindowSize()

	const isShowOnDesktop = !isMobile
	const isShowOnMobile = isMobile
	return (
		<Container width="full" className={styles.component}>
			<Container width="containerXl" direction="row" align="start">
				<div className={styles.left}>
					<Heading as="h4" className={styles.title}>
						УСЛОВИЯ
					</Heading>
					{isShowOnMobile &&
						<Content />
					}
					<Button
						className={styles.button}
						href={ROUTES_TERMS_CONDITIONS.href}
					>
						КРУИЗНАЯ ЛИНИЯ
					</Button>
				</div>
				{isShowOnDesktop && <Content />}
			</Container>
		</Container>
	)
}
