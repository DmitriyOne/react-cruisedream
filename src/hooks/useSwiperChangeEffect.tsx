import SwiperCore from 'swiper'

export const useSwiperChangeEffect = () => {
	const windowSize = window.innerWidth

	const onBeforeInit = (Swiper: SwiperCore): void => {
		const swiperParams = Swiper.params
		if (windowSize <= 768) {
			swiperParams.effect = 'slide'
			swiperParams.spaceBetween = 15
		}
	}

	return { onBeforeInit }
}
