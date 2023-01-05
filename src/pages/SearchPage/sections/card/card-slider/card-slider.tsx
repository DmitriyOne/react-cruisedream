import { useWindowSize } from '../../../../../hooks'

import { Discount, MyTimer } from '../../../../../components'
import { CruiseAmountDays, CruiseLabel, CruiseSlider } from '../../../../../components/Cruise'

import styles from './card-slider.module.scss'

export const CardSlider = () => {
	const { isMobile } = useWindowSize()

	const isShowDiscount = isMobile
	return (
		<div className={styles.component}>
			{isMobile ? <CruiseAmountDays /> : <CruiseLabel />}

			<CruiseSlider />

			<MyTimer
				deadline="20 Jan 2023 17:00"
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
