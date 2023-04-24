import { useContext, useEffect } from 'react'

import { HeaderContext } from '@crdr/context'
import { useOpen } from '@crdr/hooks'

import { Button, MyImage } from '@crdr/ui'

import phoneIcon from '../icons/phone.svg'

import { ContactDropdown } from './ContactDropdown/ContactDropdown'

import styles from './contact-mobile.module.scss'

export const ContactMobile = () => {
	const { isOpen: isShowContacts, onClose: onCloseContacts, onToggle: onToggleContacts } = useOpen()
	const { isOpen: menuOpen, onClose: menuClose } = useContext(HeaderContext)

	useEffect(() => {
		if (menuOpen) {
			onCloseContacts()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
				<MyImage
					imageClass={styles.centerIcon}
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
