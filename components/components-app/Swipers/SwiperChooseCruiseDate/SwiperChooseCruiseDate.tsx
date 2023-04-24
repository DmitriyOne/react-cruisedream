import classNames from 'classnames'

import { dataCruiseChooseDateSlider, paramsChooseDate } from '@crdr/fakedata'
import { useWindowSize } from '@crdr/hooks'

import { MySwiper } from '@crdr/plugins'
import { B } from '@crdr/ui'

import styles from './swiper-choose-cruise-date.module.scss'

export const SwiperChooseCruiseDate = () => {
	const { width } = useWindowSize()
	const arrowColor = width! <= 1440 ? 'white' : 'blue'

	return (
		<div className={styles.component}>
			<MySwiper
				swiperClass={classNames(styles.swiper, 'my-swiper-choose')}
				params={paramsChooseDate}
				arrowClass={styles.swiperArrow}
				arrowPrevClass={styles.prev}
				arrowNextClass={styles.next}
				arrowColor={arrowColor}
				buttonPosition="behind-swiper"
			>
				{dataCruiseChooseDateSlider.map((slide, idx) =>
					<div
						key={idx}
						className={classNames(
							styles.wrapper,
							'my-swiper-choose-wrapper',
							slide.isSold ? 'disabled' : '',
						)}
					>
						<div className={styles.top}>
							<B fontWeight={700} className={styles.textDate}>
								{slide.date.start}
							</B>
							<span className={styles.textTo}>
								по
							</span>
							<B fontWeight={700} className={styles.textDate}>
								{slide.date.end}
							</B>
						</div>
						<div className={styles.bottom}>
							{slide.price &&
								<B fontWeight={700} className={styles.textPrice}>
									{slide.price}$
								</B>
							}
							{slide.isCallUs &&
								<B fontWeight={600} className={styles.textCall}>
									позвоните для уточнения
									Вашей цены
								</B>
							}
							{slide.isSold &&
								<B fontWeight={600} className={styles.textPrice}>
									продано
								</B>
							}
						</div>
					</div>
				)}
			</MySwiper>
		</div>
	)
}
