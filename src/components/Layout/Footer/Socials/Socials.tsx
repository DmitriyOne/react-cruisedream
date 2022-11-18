import { CRUISE_SOCIAL_LINKS } from '../../../../constants'

import instIcon from '../icons/instagram.svg'
import vkIcon from '../icons/vk.svg'
import telegramIcon from '../icons/telegram.svg'
import youtubeIcon from '../icons/youtube.svg'

import styles from './socials.module.scss'
import { Logo } from '../../Logo'

export const Socials = () => {
	return (
		<div className={styles.component}>
			<Logo
				variant="white"
				subtitle="Круизное агенство"
				subtitleClass={styles.logoText}
			/>
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
	)
}
