import { useWindowSize } from '../../../../../hooks'

import { Discount } from '../../../../../components'
import { CruiseAmountDays, CruiseTimer, CruiseLabel, CruiseSlider } from '../../../../../components/Cruise'

import styles from './card-slider.module.scss'

export const CardSlider = () => {
	const { isMobile } = useWindowSize()

	const isShowDiscount = isMobile
	return (
		<div className={styles.component}>
			{isMobile ? <CruiseAmountDays /> : <CruiseLabel />}

			<CruiseSlider />

			<CruiseTimer
				deadline="7 Jan 2023 17:00"
				classComponent={styles.timer}
			/>

			{isShowDiscount
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
