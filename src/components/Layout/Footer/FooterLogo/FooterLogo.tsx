import { Logo } from '../../Logo'
import { FooterSocials } from '../FooterSocials/FooterSocials'

import styles from './footer-logo.module.scss'

export const FooterLogo = () => {
	return (
		<div className={styles.component}>
			<Logo
				className={styles.logo}
				variant="white"
				subtitle="Круизное агенство"
				subtitleClass={styles.logoText}
			/>
			<FooterSocials />
		</div>
	)
}
