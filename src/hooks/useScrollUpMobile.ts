import { useState, useEffect, useRef } from 'react'

import { useWindowSize } from './useWindowSize'

export const useScrollUpMobile = () => {
	const [isScroll, setIsScroll] = useState(false)
	const [isScrollUp, setIsScrollUp] = useState(false)
	const { isTablet } = useWindowSize()
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		var prevScrollPos = window.pageYOffset
		window.addEventListener('scroll', () => {
			const elRef = Math.round(ref.current!.getBoundingClientRect().top)
			const currentElRef = ref.current!.offsetHeight - ref.current!.offsetHeight * 2

			if (elRef <= currentElRef) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}

			var currentScrollPos = window.pageYOffset
			if (prevScrollPos > currentScrollPos) {
				setIsScrollUp(true)
			} else {
				setIsScrollUp(false)
			}
			prevScrollPos = currentScrollPos
		})
	})

	const isFixed = isScroll && isTablet
	const isShowFixed = isScrollUp && isTablet

	return { ref, isFixed, isShowFixed }
}
