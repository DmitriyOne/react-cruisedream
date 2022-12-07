import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSwiperButtons, useWindowSize } from '../../../../../hooks'
import { Button, Discount } from '../../../../../components'

import { params } from './data-card-swiper'

import imageSrc1 from '../images/cruise-1.jpeg'
import imageSrc2 from '../images/cruise-2.jpeg'

import 'swiper/css'
import 'swiper/css/effect-fade'
import styles from './card-slider.module.scss'
import { CruiseTimer } from '../../../../../components/Cruise'

export const CardSlider = () => {
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>
			{isMobile
				?
				<div className={styles.labelWrapper}>
					<span className={styles.labelTitle}>
						7
					</span>
					<span className={styles.labelSubtitle}>
						ночей
					</span>
				</div>
				:
				<div className={styles.labelWrapper}>
					<span className={styles.labelTitle}>
						Cruisedream
					</span>
				</div>
			}
			<Swiper
				className={styles.swiper}
				onSwiper={upDateSwiper}
				{...params}
			>

				<SwiperSlide>
					<span className={styles.image}>
						<img
							src={imageSrc1}
							alt="Cruise 1"
						/>
					</span>
				</SwiperSlide>

				<SwiperSlide>
					<span className={styles.image}>
						<img
							src={imageSrc2}
							alt="Cruise 2"
						/>
					</span>
				</SwiperSlide>

				<Button
					className={classNames(styles.swiperArrow, styles.prev)}
					onClick={handlerPrev}
				/>
				<Button
					className={classNames(styles.swiperArrow, styles.next)}
					onClick={handlerNext}
				/>
			</Swiper>
			<CruiseTimer deadline="12.31.2022" />
			{isMobile &&
				<Discount
					percentage={25}
					className={styles.discount}
					classNameText={styles.discountText}
					classNamePercentage={styles.discountPercentage}
				/>
			}
		</div>
	)
}
