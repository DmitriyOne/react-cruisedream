import { useEffect, useState } from 'react'

import { Logo } from '../Logo'
import { Navbar } from './Navbar'
import { Contacts } from './Contacts'
import { Burger } from './Burger'
import { Information } from '../Information'

import { useOpen, useScrollUp, useWindowSize } from '../../../hooks'
import { Container } from '../../Container'

import styles from './header.module.scss'
import classNames from 'classnames'

export const Header = () => {
	const { isTablet, isDesktop } = useWindowSize()
	const { onToggle: burgerToggle, isOpen: burgerIsOpen } = useOpen()
	const { isScroll, isScrollUp, ref } = useScrollUp()

	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow
		if (burgerIsOpen) {
			document.body.style.overflow = 'hidden'
		}
		return () => {
			document.body.style.overflow = originalStyle
		}
	}, [burgerIsOpen])

	const isSticky = isScroll && isTablet
	const isShowSticky = isScrollUp && isTablet

	return (
		<>
			<header
				ref={ref}
				className={classNames(
					isTablet ? styles.component : undefined,
					isSticky ? styles.sticky : undefined,
					isShowSticky ? styles.show : undefined
				)}
			>
				{isDesktop && <Information />}
				<div className={styles.header}
				>
					<Container direction="row">
						{isTablet &&
							<Burger
								burgerToggle={burgerToggle}
								burgerIsOpen={burgerIsOpen}
							/>
						}
						<Logo className={styles.logo} />
						<Navbar
							navbarIsOpen={burgerIsOpen}
							navIsClose={burgerToggle}
						/>
						<Contacts />
					</Container>
				</div>
			</header>
			{isTablet && <Information />}
		</>
	)
}
