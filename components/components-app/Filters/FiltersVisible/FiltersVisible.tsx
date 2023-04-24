import { CompanySelect, DatepickerSelector, RegionSelect } from '@crdr/components'
import { Button,Container } from '@crdr/ui'

import styles from './filters-visible.module.scss'

export const FiltersVisible = () => {

	return (
		<Container width="full" className={styles.component}>
			<RegionSelect
				classComponent={styles.col}
				classPrefix="select-white"
			/>
			<CompanySelect
				classComponent={styles.col}
				classPrefix="select-white"
			/>
			<DatepickerSelector
				componentClass={styles.col}
				inputClass={styles.inputDatepicker}
				iconIndentRight="15"
				isBorderRadius
			/>
			<Button className={styles.button}>
				НАЙТИ КРУИЗ
			</Button>
		</Container>
	)
}
