import { useEffect } from 'react'

import { Logo } from '../Logo'
import { Navbar } from './Navbar'
import { Contacts } from './Contacts'
import { Burger } from './Burger'
import { Information } from '../Information'

import { useOpen, useWindowSize } from '../../../hooks'
import { Container } from '../../Container'

import styles from './header.module.scss'

export const Header = () => {
	const { isTablet } = useWindowSize()
	const { onToggle: burgerToggle, isOpen: burgerIsOpen } = useOpen()

	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow
		if (burgerIsOpen) {
			document.body.style.overflow = 'hidden'
		}
		return () => {
			document.body.style.overflow = originalStyle
		}
	}, [burgerIsOpen])

	return (
		<header className={isTablet ? styles.component : ''}>
			<Information />
			<div className={styles.header}>
				<Container direction="row">
					{isTablet &&
						<Burger
							burgerToggle={burgerToggle}
							burgerIsOpen={burgerIsOpen}
						/>
					}
					<Logo className={styles.logo} />
					<Navbar navbarIsOpen={burgerIsOpen} />
					<Contacts />
				</Container>
			</div>
		</header>
	)
}
