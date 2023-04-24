import { FC, memo, useState } from 'react'

import { useWindowSize } from '@crdr/hooks'

import { IImage } from '@crdr/interfaces'

import { CruiseAmountDays, CruiseLabel, Discount } from '@crdr/components'
import { MyLightbox, MySwiper } from '@crdr/plugins'
import { Button, MyImage } from '@crdr/ui'

import { params } from './swiper'

import styles from './swiper-gallery.module.scss'

interface IProps {
	images: IImage[]
	isCruisePage?: boolean
}

export const SwiperGallery: FC<IProps> = memo(({ isCruisePage = false, ...gallery }) => {
	const [index, setIndex] = useState(-1)
	const { isMobile } = useWindowSize()

	const onShowImg = (idx: number) => {
		setIndex(idx)
	}

	const renderCruiseDetails = () => {
		if (!isCruisePage) return
		return (
			<>
				<Discount
					percentage={25}
					className={styles.discount}
					classNameText={styles.discountText}
					classNamePercentage={styles.discountPercentage}
				/>
				{isMobile ? <CruiseAmountDays /> : <CruiseLabel />}
			</>
		)
	}

	return (
		<>
			<div className={styles.component}>
				<MySwiper
					swiperClass={styles.swiper}
					slideClass={styles.slide}
					params={params}
					isArrowShowOnlyTablet
				>
					{gallery?.images?.slice(0, 3).map((slide, index) =>
						<div key={index} className={styles.wrapperImage}>
							<MyImage
								onClick={() => onShowImg(index)}
								src={slide.src}
								alt={slide.alt}
								isPriority
							/>
						</div>
					)}
				</MySwiper>
				{renderCruiseDetails()}
				<Button className={styles.button} onClick={() => onShowImg(0)}>
					ВСЕ ФОТО
				</Button>
			</div>

			<MyLightbox
				isOpenGallery={index >= 0}
				index={index}
				onCloseGallery={() => setIndex(-1)}
				images={gallery.images}
			/>
		</>
	)
})

SwiperGallery.displayName = 'SwiperGallery'
