import { Container } from '../../../components'

import { Feedback } from './Feedback/Feedback'
import { FooterLinks } from './FooterLinks/FooterLinks'
import { ScrollTop } from './ScrollTop/ScrollTop'
import { Socials } from './Socials/Socials'

import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container direction="row">
				<div className={styles.col}>
					<Socials />
					<FooterLinks />
				</div>
				<div className={styles.col}>
					<Feedback />
					<ScrollTop />
				</div>
			</Container>
		</footer>
	)
}
