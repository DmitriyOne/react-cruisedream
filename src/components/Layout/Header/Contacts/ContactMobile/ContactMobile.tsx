import { useOpen } from '../../../../../hooks'
import { Button } from '../../../../Button'

import phoneIcon from '../icons/phone.svg'

import styles from './contact-mobile.module.scss'
import { ContactDropdown } from './ContactDropdown/ContactDropdown'

export const ContactMobile = () => {
	const { isOpen, onToggle: dropdownIsOpen } = useOpen()

	return (
		<>
			<Button
				className={styles.centerButton}
				onClick={dropdownIsOpen}
			>
				<img
					className={styles.centerIcon}
					src={phoneIcon}
					alt="Phone icon"
				/>
			</Button>
		
			{isOpen 
			&& <ContactDropdown />
			}
		</>
	)
}
