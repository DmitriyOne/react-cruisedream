import { ROUTES_TERMS_CONDITIONS } from '@crdr/constants'
import { useWindowSize } from '@crdr/hooks'

import { Button, Heading } from '@crdr/ui'

import { Content } from './Content/Content'

import styles from './terms-conditions.module.scss'

export const TermsCondComponent = () => {
	const { isMobile } = useWindowSize()

	const isShowOnDesktop = !isMobile
	const isShowOnMobile = isMobile
	return (
		<>
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
		</>
	)
}
