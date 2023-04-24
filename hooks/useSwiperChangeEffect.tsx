import SwiperCore from 'swiper'

export const useSwiperChangeEffect = () => {

	const onBeforeInit = (Swiper: SwiperCore): void => {
		const swiperParams = Swiper.params

		if (window.innerWidth <= 768) {
			swiperParams.effect = 'slide'
			swiperParams.spaceBetween = 15
			swiperParams.slidesPerView = 1
		}
	}

	return { onBeforeInit }
}
