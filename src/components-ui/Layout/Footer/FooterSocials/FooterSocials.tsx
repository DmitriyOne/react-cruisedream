import { Button } from '../../../../components-ui/Button'

import { SocialLinks } from '../social-links'

import styles from './footer-socials.module.scss'

export const FooterSocials = () => {
	return (
		<div className={styles.component}>
			{SocialLinks.map((social, id) =>
				<Button
					key={id}
					href={social.href}
					className={styles.icon}
					target="_blank"
				>
					<img
						src={social.src}
						alt={social.alt}
					/>
				</Button>
			)}
		</div>
	)
}
