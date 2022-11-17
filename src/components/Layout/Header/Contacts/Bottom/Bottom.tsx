import { CRUISE_SOCIAL_LINKS } from '../../../../../constants'

import telegramIcon from '../icons/telegram.svg'
import whatsappIcon from '../icons/whatsapp.svg'

import styles from './bottom.module.scss'

export const Bottom = () => {
	return (
		<div className={styles.row}>
			<a
				className={styles.bottomIcon}
				href={CRUISE_SOCIAL_LINKS.telegram}
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={telegramIcon}
					alt="Telegram icon"
				/>
			</a>
			<a
				className={styles.bottomIcon}
				href={CRUISE_SOCIAL_LINKS.whatsapp}
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={whatsappIcon}
					alt="Whatsapp icon"
				/>
			</a>
			<span className={styles.bottomText}>
				Пн-Пт с 9.00-19.00
			</span>
		</div>
	)
}
