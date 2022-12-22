import { ChooseDate } from './ChooseDate/ChooseDate'
import { ChooseSlider } from './ChooseSlider/ChooseSlider'

import styles from './cruise-slider-dates.module.scss'

export const CruiseSliderDates = () => {

	return (
		<div className={styles.component}>
			<ChooseDate />
			<ChooseSlider />
		</div>
	)
}
