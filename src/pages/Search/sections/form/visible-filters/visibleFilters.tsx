import { useContext, useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { ru } from 'date-fns/esm/locale'

import { SearchFiltersContext } from '../../../../../context'
import { optionRegionHome, optionCompanyHome } from '../../../../../fakedata'

import { Button, Container } from '../../../../../components'

import styles from './visible-filters.module.scss'

export const VisibleFilters = () => {
	const [startDate, setStartDate] = useState<Date>()
	const [endDate, setEndDate] = useState<Date>()
	const { getValueRegion, onChangeRegion, getValueCompany, onChangeCompany } = useContext(SearchFiltersContext)

	return (
		<Container width="full" className={styles.component}>
			<Select
				options={optionRegionHome}
				placeholder="Карибы"
				className={styles.col}
				classNamePrefix="select-white"
				value={getValueRegion()}
				onChange={onChangeRegion}
			/>
			<Select
				options={optionCompanyHome}
				placeholder="Royalcaribbean"
				className={styles.col}
				classNamePrefix="select-white"
				value={getValueCompany()}
				onChange={onChangeCompany}
			/>
			<div className={styles.col}>
				<DatePicker
					wrapperClassName={styles.datepicker}
					selected={startDate}
					onChange={(date: Date) => setStartDate(date)}
					placeholderText="11.03.23"
					className={styles.inputDatepicker}
					dateFormat={'dd.MM.yyyy'}
					startDate={startDate}
					endDate={endDate}
					locale={ru}
				/>
			</div>
			<div className={styles.col}>
				<DatePicker
					wrapperClassName={styles.datepicker}
					selected={endDate}
					onChange={(date: Date) => setEndDate(date)}
					placeholderText="25.03.23"
					className={styles.inputDatepicker}
					dateFormat={'dd.MM.yyyy'}
					startDate={startDate}
					endDate={endDate}
					locale={ru}
				/>
			</div>
			<Button className={styles.button}>
				НАЙТИ КРУИЗ
			</Button>
		</Container>
	)
}
