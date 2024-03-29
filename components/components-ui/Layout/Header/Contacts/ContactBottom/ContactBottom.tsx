import { CRUISE_SOCIAL_LINKS } from '@crdr/constants'

import { Button, MyImage } from '@crdr/ui'

import telegramIcon from '../icons/telegram.svg'
import whatsappIcon from '../icons/whatsapp.svg'

import styles from './contact-bottom.module.scss'

export const ContactBottom = () => {
	return (
		<div className={styles.row}>
			<Button
				className={styles.bottomIcon}
				href={CRUISE_SOCIAL_LINKS.telegram}
				target="_blank"
			>
				<MyImage
					src={telegramIcon}
					alt="Telegram icon"
				/>
			</Button>
			<Button
				className={styles.bottomIcon}
				href={CRUISE_SOCIAL_LINKS.whatsapp}
				target="_blank"
			>
				<MyImage
					src={whatsappIcon}
					alt="Whatsapp icon"
				/>
			</Button>
			<span className={styles.bottomText}>
				Пн-Пт с 9.00-19.00
			</span>
		</div>
	)
}
