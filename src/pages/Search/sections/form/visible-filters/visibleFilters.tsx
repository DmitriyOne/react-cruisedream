import { useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { ru } from 'date-fns/esm/locale'

import { Button, Container } from '../../../../../components'

import { option1, option2 } from '../../data'

import styles from './visible-filters.module.scss'
import classNames from 'classnames'

export const VisibleFilters = () => {
	const [startDate, setStartDate] = useState<Date>()
	const [endDate, setEndDate] = useState<Date>()

	return (
		<Container width="full" className={styles.component}>
			<Select
				options={option1}
				placeholder="Карибы"
				className={styles.col}
				classNamePrefix="select-white"
			/>
			<Select
				options={option2}
				placeholder="Royalcaribbean"
				className={styles.col}
				classNamePrefix="select-white"
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
