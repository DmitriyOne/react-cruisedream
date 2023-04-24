import { CRUISE_SOCIAL_LINKS } from '@crdr/constants'

import { B } from '@crdr/ui'
import { Button } from '@crdr/ui'

import styles from './footer-feedback.module.scss'

export const FooterFeedback = () => {
	return (
		<div className={styles.component}>
			<Button className={styles.buttonFeedback}>
				ЗАКАЗАТЬ ЗВОНОК
			</Button>
			<a
				href={`tel:${CRUISE_SOCIAL_LINKS.phone}`}
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
	)
}
