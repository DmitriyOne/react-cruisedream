import { useWindowSize } from '../../../hooks'
import { Container } from '../../../components'

import { FooterFeedback } from './FooterFeedback/FooterFeedback'
import { FooterMenu } from './FooterMenu/FooterMenu'
import { FooterScrollTop } from './FooterScrollTop/FooterScrollTop'
import { FooterLogo } from './FooterLogo/FooterLogo'
import { FooterSocials } from './FooterSocials/FooterSocials'

import styles from './footer.module.scss'

export const Footer = () => {
	const { isMobile, isDesktop } = useWindowSize()

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
				{isDesktop && <FooterScrollTop />}
				{isMobile && <FooterSocials />}
			</Container>
		</footer>
	)
}
