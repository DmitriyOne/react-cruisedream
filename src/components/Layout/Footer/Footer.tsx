import { CRUISE_SOCIAL_LINKS } from '../../../constants'

import { B, Button, Container } from '../../../components'
import { Logo } from '../Logo'

import instIcon from './icons/instagram.svg'
import vkIcon from './icons/vk.svg'
import telegramIcon from './icons/telegram.svg'
import youtubeIcon from './icons/youtube.svg'
import arrowIcon from './icons/arrow-top.svg'

import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container direction="row">
				<div>
					<Logo variant="white" />
					<B className={styles.logoText}>
						КРУИЗНое агенство
					</B>
					<div className={styles.socialRow}>
						<a
							href={CRUISE_SOCIAL_LINKS.inst}
							className={styles.socialIcon}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={instIcon}
								alt="Instagram Icon"
							/>
						</a>
						<a
							href={CRUISE_SOCIAL_LINKS.vk}
							className={styles.socialIcon}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={vkIcon}
								alt="Vk Icon"
							/>
						</a>
						<a
							href={CRUISE_SOCIAL_LINKS.telegram}
							className={styles.socialIcon}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={telegramIcon}
								alt="Telegram Icon"
							/>
						</a>
						<a
							href={CRUISE_SOCIAL_LINKS.youtube}
							className={styles.socialIcon}
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={youtubeIcon}
								alt="Youtube Icon"
							/>
						</a>
					</div>
				</div>
				<div>
					<Button className={styles.buttonFeedback}>
						ЗАКАЗАТЬ ЗВОНОК
					</Button>
					<a
						href={CRUISE_SOCIAL_LINKS.phone}
						className={styles.phoneFeedback}
						target="_blank"
						rel="noreferrer"
					>
						<B>
							+7 499 653 89 91
						</B>
					</a>
					<a
						href={CRUISE_SOCIAL_LINKS.mail}
						className={styles.mailFeedback}
						target="_blank"
						rel="noreferrer"
					>
						CRUizgr@123.ru
					</a>
				</div>
				<div>
					<Button className={styles.arrow}>
						<img
							src={arrowIcon}
							alt="Arrow top"
						/>
					</Button>
				</div>
			</Container>
		</footer>
	)
}
