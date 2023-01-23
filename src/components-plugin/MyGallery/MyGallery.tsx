import classNames from 'classnames'
import { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { params } from './swiper'

import { useOpen, useSwiperButtons, useWindowSize } from '../../hooks'
import { IGalleryImage } from '../../model/interfaces'

import { Discount } from '../../components'
import { CruiseAmountDays, CruiseLabel } from '../../components/Cruise'
import { MyLightbox } from '../../components-plugin'
import { Button } from '../../components-ui'

import 'swiper/css'
import styles from './my-gallery.module.scss'

interface IProps {
	images: IGalleryImage[]
	isCruisePage?: boolean
}

export const MyGallery: FC<IProps> = ({ isCruisePage = false, ...gallery }) => {
	const { isOpen: isOpenGallery, onOpen: onOpenGallery, onClose: onCloseGallery } = useOpen()
	const { isMobile } = useWindowSize()
	const { upDateSwiper, handlerNext, handlerPrev } = useSwiperButtons()

	return (
		<>
			<div className={styles.component}>
				{isMobile
					?
					<Swiper
						className={styles.swiper}
						onSwiper={upDateSwiper}
						{...params}
					>
						{gallery.images.slice(0, 3).map((slide, idx) =>
							<SwiperSlide key={idx} className={styles.slide}>
								<img src={slide.src} alt="" />
							</SwiperSlide>
						)}
						{isCruisePage &&
							<>
								<Discount
									percentage={25}
									className={styles.discount}
									classNameText={styles.discountText}
									classNamePercentage={styles.discountPercentage}
								/>
								<CruiseAmountDays />
							</>}
						<Button
							className={classNames(styles.swiperArrow, styles.prev)}
							onClick={handlerPrev}
						/>
						<Button
							className={classNames(styles.swiperArrow, styles.next)}
							onClick={handlerNext}
						/>
					</Swiper>
					:
					<>
						<div className={classNames(styles.left, styles.imgWrapper)}>
							<img src={gallery.images[0].src} alt="" />

							{isCruisePage &&
								<>
									<Discount
										percentage={25}
										className={styles.discount}
										classNameText={styles.discountText}
										classNamePercentage={styles.discountPercentage}
									/>
									<CruiseLabel />
								</>
							}
						</div>
						<div className={styles.right}>
							<div className={styles.imgWrapper}>
								<img src={gallery.images[1].src} alt="" />
							</div>
							<div className={styles.imgWrapper}>
								<img src={gallery.images[2].src} alt="" />
							</div>
						</div>

					</>
				}



				<Button className={styles.button} onClick={onOpenGallery}>
					ВСЕ ФОТО
				</Button>
			</div>

			<MyLightbox
				isOpenGallery={isOpenGallery}
				onCloseGallery={onCloseGallery}
				images={gallery.images}
			/>
		</>
	)
}
