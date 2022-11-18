import { CRUISE_SOCIAL_LINKS } from '../../../../constants'
import { B } from '../../../B'
import { Button } from '../../../Button'

import styles from './feedback.module.scss'

export const Feedback = () => {
	return (
		<div className={styles.component}>
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
	)
}
