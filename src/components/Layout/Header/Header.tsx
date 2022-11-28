import { useEffect, useState } from 'react'

import { Logo } from '../Logo'
import { Navbar } from './Navbar'
import { Contacts } from './Contacts'
import { Burger } from './Burger'
import { Information } from '../Information'

import { useOpen, useWindowSize } from '../../../hooks'
import { Container } from '../../Container'

import styles from './header.module.scss'
import classNames from 'classnames'

export const Header = () => {
	const { isTablet } = useWindowSize()
	const { onToggle: burgerToggle, isOpen: burgerIsOpen } = useOpen()
	const [isScroll, setIsScroll] = useState(false)

	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow
		if (burgerIsOpen) {
			document.body.style.overflow = 'hidden'
		}
		return () => {
			document.body.style.overflow = originalStyle
		}
	}, [burgerIsOpen])

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const isCurrentScroll = window.scrollY
			setIsScroll(isCurrentScroll >= 20)
		})

		window.addEventListener('wheel', function (event) {
			if (event.deltaY < 0) {
				console.log('scrolling up')
			}
			else if (event.deltaY > 0) {
				console.log('scrolling down')
			}
		})
	})



	return (
		<>
			<header className={classNames(
				styles.component,
				isScroll ? styles.sticky : undefined
			)}>
				{!isTablet && <Information />}
				<div className={styles.header}>
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
