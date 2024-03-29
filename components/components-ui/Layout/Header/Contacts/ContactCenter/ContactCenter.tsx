import { CRUISE_SOCIAL_LINKS } from '@crdr/constants'

import { Button } from '@crdr/ui'

import styles from './contact-center.module.scss'

export const ContactCenter = () => {

	return (
		<div className={styles.row}>
			<Button
				className={styles.centerPhone}
				href={`tel:${CRUISE_SOCIAL_LINKS.phone}`}
				target="_blank"
			>
				+7 499 653 89 91
			</Button>
		</div>
	)
}
