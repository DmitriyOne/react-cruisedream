import { useRef } from 'react'

import SwiperCore from 'swiper'

export const useSwiperButtons = () => {
	const navPrevButton = useRef<HTMLButtonElement>(null)
	const navNextButton = useRef<HTMLButtonElement>(null)

	const onBeforeInit = (Swiper: SwiperCore): void => {
		if (typeof Swiper.params.navigation !== 'boolean') {
			const navigation = Swiper.params.navigation
			navigation!.prevEl = navPrevButton.current
			navigation!.nextEl = navNextButton.current
		}
	}

	return { navNextButton, navPrevButton, onBeforeInit }
}
