import { useWindowSize } from '../../../../hooks'

import { ContactBottom } from './ContactBottom/ContactBottom'
import { ContactCenter } from './ContactCenter/ContactCenter'
import { ContactMobile } from './ContactMobile/ContactMobile'
import { ContactTop } from './ContactTop/ContactTop'

import styles from './contacts.module.scss'
import classNames from 'classnames'

export const Contacts = () => {
	const { isTablet } = useWindowSize()

	const componentClass = classNames(styles.component, {
		[styles.mobile]: isTablet
	})
	return (
		<div className={componentClass}>
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
