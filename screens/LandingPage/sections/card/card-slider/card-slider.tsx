import { useWindowSize } from '@crdr/hooks'

import { CruiseAmountDays, CruiseLabel, Discount, SwiperCruiseSearchResult, Timer } from '@crdr/components'

import styles from './card-slider.module.scss'

export const CardSlider = () => {
	const { isMobile } = useWindowSize()

	const isShowDiscount = isMobile
	return (
		<div className={styles.component}>
			{isMobile ? <CruiseAmountDays /> : <CruiseLabel />}

			<SwiperCruiseSearchResult />

			<Timer
				deadline="05 March 2023 14:30"
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
