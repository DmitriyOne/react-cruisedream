import { useWindowSize } from '../../../../hooks'

import { ContactBottom } from './ContactBottom/ContactBottom'
import { ContactCenter } from './ContactCenter/ContactCenter'
import { ContactMobile } from './ContactMobile/ContactMobile'
import { ContactTop } from './ContactTop/ContactTop'

import styles from './contacts.module.scss'

export const Contacts = () => {
	const { isTablet } = useWindowSize()

	return (
		<div className={isTablet ? styles.component : ''}>
			{isTablet
				?
				<ContactMobile />
				:
				<>
					<ContactTop />
					<ContactCenter />
					<ContactBottom />
				</>
			}
		</div>
	)
}
