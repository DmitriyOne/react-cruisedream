/* eslint-disable max-len */
import { useState, useEffect, useRef } from 'react'

export const useScrollUp = () => {
	const [isScroll, setIsScroll] = useState(false)
	const [isScrollUp, setIsScrollUp] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const currentEl = Math.round(ref.current!.getBoundingClientRect().top)
			const currentElHeight = ref.current!.offsetHeight - ref.current!.offsetHeight * 2			

			if (currentEl <= currentElHeight ) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}
		})

		window.addEventListener('wheel', (event) => {
			if (event.deltaY < 0) {
				setIsScrollUp(true)
			}
			else if (event.deltaY > 0) {
				setIsScrollUp(false)
			}
		})
	}, [isScroll])

	return { isScroll, isScrollUp, ref }
}
