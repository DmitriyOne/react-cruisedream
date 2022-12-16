import { FC } from 'react'

import { useWindowSize } from '../../../../../hooks'
import { ISlider } from '../interfaces/ISlider'

import { Discount } from '../../../../../components'
import { CruiseAmountDays, CruiseTimer, CruiseLabel, CruiseSlider } from '../../../../../components/Cruise'

import styles from './card-slider.module.scss'

export const CardSlider: FC<ISlider> = ({ days, label, images, isTimer, deadline, isSale, sale }) => {
	const { isMobile } = useWindowSize()

	const isShowDiscount = isMobile && isSale
	return (
		<div className={styles.component}>
			{isMobile ? <CruiseAmountDays days={days} /> : <CruiseLabel label={label} />}

			<CruiseSlider images={images} />

			{isTimer &&
				<CruiseTimer
					deadline={deadline!}
					classComponent={styles.timer}
				/>
			}

			{isShowDiscount
				&& <Discount
					percentage={sale}
					className={styles.discount}
					classNameText={styles.discountText}
					classNamePercentage={styles.discountPercentage}
				/>
			}
		</div>
	)
}
