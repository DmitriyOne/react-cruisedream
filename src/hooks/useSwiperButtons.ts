import { useRef, useState } from 'react'

import SwiperCore, { Swiper } from 'swiper'

export const useSwiperButtons = () => {
	const [swiper, setSwiper] = useState<Swiper>()

	const navPrevButton = useRef<HTMLButtonElement>(null)
	const navNextButton = useRef<HTMLButtonElement>(null)

	const onBeforeInit = (Swiper: SwiperCore): void => {

		if (typeof Swiper.params.navigation !== 'boolean') {
			const navigation = Swiper.params.navigation

			navigation!.prevEl = navPrevButton.current
			navigation!.nextEl = navNextButton.current
		}
	}

	const upDateSwiper = (s: Swiper) => {
		setSwiper(s)
	}

	const handlerPrev = () => {
		swiper!.slidePrev()
	}

	const handlerNext = () => {
		swiper!.slideNext()
	}

	return {
		navNextButton,
		navPrevButton,
		onBeforeInit,
		swiper,
		upDateSwiper,
		handlerNext,
		handlerPrev
	}
}
