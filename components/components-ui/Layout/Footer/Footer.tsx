import { useWindowSize } from '@crdr/hooks'

import { Container } from '@crdr/ui'

import { FooterFeedback } from './FooterFeedback/FooterFeedback'
import { FooterLogo } from './FooterLogo/FooterLogo'
import { FooterMenu } from './FooterMenu/FooterMenu'
import { FooterSocials } from './FooterSocials/FooterSocials'

import styles from './footer.module.scss'

export const Footer = () => {
	const { isDesktop, isTablet } = useWindowSize()

	const direction = isDesktop ? 'row' : 'column'
	return (
		<footer className={styles.footer}>
			<Container
				width="containerXl"
				direction={direction}
			>
				{isDesktop && <FooterLogo />}
				<FooterMenu />
				<FooterFeedback />
				{isTablet && <FooterSocials />}
			</Container>
		</footer>
	)
}
