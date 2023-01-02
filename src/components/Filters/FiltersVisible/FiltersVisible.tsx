import { useContext } from 'react'

import { SearchFiltersContext } from '../../../context'

import { Container, MySelect, MyDatepicker, Button } from '../../../components'

import styles from './filters-visible.module.scss'

export const FiltersVisible = () => {
	const { region, cruise, onChangeRegion, onChangeCruise, date } = useContext(SearchFiltersContext)

	return (
		<Container width="full" className={styles.component}>
			<MyDatepicker
				componentClassName={styles.col}
				wrapperClassName={styles.datepickerWrapper}
				inputClassName={styles.inputDatepicker}
				placeholder="Даты круиза"
				startDate={date.dateStart}
				endDate={date.dateEnd}
				onChange={date.onChangeDates}
			/>
			<Button className={styles.button}>
				НАЙТИ КРУИЗ
			</Button>
		</Container>
	)
}
