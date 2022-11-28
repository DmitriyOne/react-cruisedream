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
	// const { isScroll, ref } = useScrollUp()

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


	useEffect(() => {

		const currentEl = Math.round(ref.current!.getBoundingClientRect().top)
		const currentElHeight = ref.current!.offsetHeight - ref.current!.offsetHeight * 2

		console.log('currentEl: ', currentEl)
		console.log('currentElHeight: ', currentElHeight)


		if (currentEl <= currentElHeight) {
			setIsScroll(true)
		} else {
			setIsScroll(false)
		}

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

			var yUp = evt.touches[0].clientY

			var yDiff = yDown - yUp

			if (yDiff > 0) {
				/* up swipe */
				setIsScrollUp(false)
			} else {
				/* down swipe */
				setIsScrollUp(true)
			}
			/* reset values */
			xDown = null
			yDown = null
		};
	})






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
