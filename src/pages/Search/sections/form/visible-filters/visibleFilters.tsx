import { useContext, useState } from 'react'
import classNames from 'classnames'

import { optionRegionHome, optionCompanyHome } from '../../../../../fakedata'

import { Button, Container, MyDatepicker, MySelect } from '../../../../../components'

import styles from './visible-filters.module.scss'
import { SearchFiltersContext } from '../../../../../context'

export const VisibleFilters = () => {
	// const [startDate, setStartDate] = useState<Date>()
	// const [endDate, setEndDate] = useState<Date>()
	const { region, cruise, onChangeRegion, onChangeCruise, date } = useContext(SearchFiltersContext)

	// const onChangeStartDate = (date: Date) => {
	// 	console.log(date.toLocaleDateString('ru-RU'))

	// 	setStartDate(date)
	// }

	// const onChangeEndDate = (date: Date) => {
	// 	console.log(date)

	// 	setEndDate(date)
	// }

	return (
		<Container width="full" className={styles.component}>
			<MySelect
				placeholder="Карибы"
				options={optionRegionHome}
				className={styles.col}
				classNamePrefix="select-white"
				value={region}
				onChange={onChangeRegion}
			/>
			<MySelect
				placeholder="Royalcaribbean"
				options={optionCompanyHome}
				className={styles.col}
				classNamePrefix="select-white"
				value={cruise}
				onChange={onChangeCruise}
			/>
			<MyDatepicker
				componentClassName={classNames(styles.col, styles.relative)}
				wrapperClassName={styles.datepickerWrapper}
				inputClassName={styles.inputDatepicker}
				width="half"
				startDate={date.dateStart}
				endDate={date.dateEnd}
				onChangeStart={date.onChangeDateStart}
				onChangeEnd={date.onChangeDateEnd}
			/>
			<Button className={styles.button}>
				НАЙТИ КРУИЗ
			</Button>
		</Container>
	)
}
