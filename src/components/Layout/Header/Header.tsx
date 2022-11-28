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

	const isFixed = isScroll && isTablet
	const isShowFixed = isScrollUp && isTablet








	document.addEventListener('touchstart', handleTouchStart, false)
	document.addEventListener('touchmove', handleTouchMove, false)

	let xDown: any = null
	let yDown: any = null

	function handleTouchStart(evt: any) {
		xDown = evt.touches[0].clientX
		yDown = evt.touches[0].clientY
	};

	function handleTouchMove(evt: any) {
		if (!xDown || !yDown) {
			return
		}

		var xUp = evt.touches[0].clientX
		var yUp = evt.touches[0].clientY

		var xDiff = xDown - xUp
		var yDiff = yDown - yUp

		if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
			if (xDiff > 0) {
				/* left swipe */
				alert('left swipe')
			} else {
				/* right swipe */
				alert('right swipe')
			}
		} else {
			if (yDiff > 0) {
				alert('up swipe')
				/* up swipe */
			} else {
				alert('down swipe')
				/* down swipe */
			}
		}
		/* reset values */
		xDown = null
		yDown = null
	};







	return (
		<>
			<header
				className={classNames(
					isTablet ? styles.component : undefined,
				)}
			>
				<Information />
				<div
					className={styles.header}
					style={isFixed ? { paddingTop: `${ref.current?.offsetHeight}px` } : undefined}
					ref={ref}
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
