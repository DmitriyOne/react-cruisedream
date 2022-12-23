import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from '../data/swiper'
import { DataCabinsDates } from '../data/dates'

import { Button, B } from '../../../../components'
import { useSwiperButtons } from '../../../../hooks'

import 'swiper/css'
import styles from './choose-slider.module.scss'

export const ChooseSlider = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<div className={styles.component}>
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...params}
			>

				{DataCabinsDates.map((slide) =>
					<SwiperSlide
						key={slide.id}
						className={classNames(
							styles.slide,
							slide.isSales ? styles.disabled : ''
						)}
					>
						<div className={styles.top}>
							<B fontWeight={700} className={styles.textDate}>
								{slide.start}
							</B>
							<span className={styles.textTo}>
								по
							</span>
							<B fontWeight={700} className={styles.textDate}>
								{slide.end}
							</B>
						</div>
						<div className={styles.bottom}>
							{slide.isPrice &&
								<B fontWeight={700} className={styles.textPrice}>
									{slide.price}$
								</B>
							}
							{slide.isCall &&
								<B fontWeight={600} className={styles.textCall}>
									позвоните для уточнения
									Вашей цены
								</B>
							}
							{slide.isSales &&
								<B fontWeight={600} className={styles.textPrice}>
									продано
								</B>
							}
						</div>
					</SwiperSlide>
				)}

			</Swiper>
			<Button
				className={classNames(styles.swiperArrow, styles.prev)}
				onClick={handlerPrev}
			/>
			<Button
				className={classNames(styles.swiperArrow, styles.next)}
				onClick={handlerNext}
			/>

		</div>
	)
}
