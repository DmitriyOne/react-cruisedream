import { useContext, useEffect } from 'react'

import { HeaderContext } from '../../../../../context'
import { useOpen } from '../../../../../hooks'

import { Button } from '../../../../../components'
import { ContactDropdown } from './ContactDropdown/ContactDropdown'

import phoneIcon from '../icons/phone.svg'

import styles from './contact-mobile.module.scss'

export const ContactMobile = () => {
	const { isOpen: isShowContacts, onClose: onCloseContacts, onToggle: onToggleContacts } = useOpen()
	const { isOpen: menuOpen, onClose: menuClose } = useContext(HeaderContext)

	useEffect(() => {
		if (menuOpen) {
			onCloseContacts()
		}
	}, [menuOpen])

	const handlerClick = () => {
		menuClose()
		onToggleContacts()
	}

	return (
		<>
			<Button
				className={styles.centerButton}
				onClick={handlerClick}
			>
				<img
					className={styles.centerIcon}
					src={phoneIcon}
					alt="Phone icon"
				/>
			</Button>

			{isShowContacts
				&& <ContactDropdown />
			}
		</>
	)
}
