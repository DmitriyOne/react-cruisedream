import { useCallback,useEffect, useRef, useState } from 'react'

export const useScrollUp = () => {
	const [isScroll, setIsScroll] = useState(false)
	const [isScrollUp, setIsScrollUp] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	const handlerScroll = useCallback(() => {
		const currentEl = Math.round(ref.current!.getBoundingClientRect().top)
		const currentElHeight = ref.current!.offsetHeight - ref.current!.offsetHeight * 2

		if (currentEl <= currentElHeight) {
			setIsScroll(true)
		} else {
			setIsScroll(false)
		}
	}, [ref])

	const handlerWheel = useCallback((event: any) => {
		if (event.deltaY < 0) {
			setIsScrollUp(true)
		} else if (event.deltaY > 0) {
			setIsScrollUp(false)
		}
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handlerScroll)
		window.addEventListener('wheel', handlerWheel)

		return () => {
			window.removeEventListener('scroll', handlerScroll)
			window.removeEventListener('wheel', handlerWheel)
		}
	}, [handlerScroll, handlerWheel])

	return { isScroll, isScrollUp, ref }
}
