import { useCallback,useEffect, useRef, useState } from 'react'

import { useWindowSize } from './useWindowSize'

export const useScrollUpMobile = () => {
	const [isScroll, setIsScroll] = useState(false)
	const [isScrollUp, setIsScrollUp] = useState(false)
	const { isTablet } = useWindowSize()
	const ref = useRef<HTMLDivElement>(null)

	if (typeof window !== 'undefined') {
		// Client-side-only code
		var prevScrollPos = window.pageYOffset
	}

	const handlerScroll = useCallback(() => {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
		prevScrollPos = currentScrollPos
	}, [ref])

	useEffect(() => {
		window.addEventListener('scroll', handlerScroll)

		return () => window.removeEventListener('scroll', handlerScroll)
	}, [handlerScroll])

	const isFixed = isScroll && isTablet
	const isShowFixed = isScrollUp && isTablet

	return { ref, isFixed, isShowFixed }
}
