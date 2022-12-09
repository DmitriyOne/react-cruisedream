import { FC } from 'react'

import { useWindowSize } from '../../../../../hooks'
import { ISlider } from '../interfaces/ISlider'

import { Discount } from '../../../../../components'
import { CruiseAmountDays, CruiseTimer, CruiseLabel, CruiseSlider } from '../../../../../components/Cruise'

import styles from './card-slider.module.scss'

export const CardSlider: FC<ISlider> = ({ days, label, images, isTimer, deadline }) => {
	const { isMobile } = useWindowSize()

	return (
		<div className={styles.component}>
			{isMobile ? <CruiseAmountDays days={days} /> : <CruiseLabel label={label} />}

			<CruiseSlider images={images} />

			{isTimer && <CruiseTimer deadline={deadline!} />}

			{isMobile
				&& <Discount
					percentage={25}
					className={styles.discount}
					classNameText={styles.discountText}
					classNamePercentage={styles.discountPercentage}
				/>
			}
		</div>
	)
}
