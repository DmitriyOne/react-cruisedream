import { useEffect, useRef, useState } from 'react'

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
	// const { isScroll, isScrollUp, ref } = useScrollUp()

	const [isScroll, setIsScroll] = useState(false)
	const [isScrollUp, setIsScrollUp] = useState(false)
	const ref = useRef<HTMLDivElement>(null)


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
		window.addEventListener('mousewheel', function (event) {
			const currentEl = Math.round(ref.current!.getBoundingClientRect().top)
			const currentElHeight = ref.current!.offsetHeight - ref.current!.offsetHeight * 2

			if (currentEl <= currentElHeight || currentEl === 0) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}

			// if (event.deltaY < 0) {
			// 	setIsScrollUp(true)
			// }
			// else if (event.deltaY > 0) {
			// 	setIsScrollUp(false)
			// }
		})
	}, [isScroll])


	const isFixed = isScroll && isTablet
	const isShowFixed = isScrollUp && isTablet



	return (
		<>
			<header
				className={classNames(
					isTablet ? styles.component : undefined,
				)}
			>
				<Information />
				<div
					ref={ref}
					className={styles.header}
					style={isFixed ? { paddingTop: `${ref.current?.offsetHeight}px` } : undefined}
				>
					<Container
						direction="row"
						className={classNames(
							styles.headerRow,
							isFixed ? styles.fixed : undefined,
							isShowFixed ? styles.show : undefined
						)}
					>
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
		</>
	)
}
