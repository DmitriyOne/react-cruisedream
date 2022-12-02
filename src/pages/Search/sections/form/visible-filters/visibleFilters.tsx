import { useState } from 'react'
import classNames from 'classnames'

import { optionRegionHome, optionCompanyHome } from '../../../../../fakedata'

import { Button, Container, MyDatepicker, MySelect } from '../../../../../components'

import styles from './visible-filters.module.scss'

export const VisibleFilters = () => {
	const [startDate, setStartDate] = useState<Date>()
	const [endDate, setEndDate] = useState<Date>()

	const onChangeStartDate = (date: Date) => {
		setStartDate(date)
		localStorage.setItem('start', date!.toDateString())
	}

	const onChangeEndDate = (date: Date) => {
		setEndDate(date)
		localStorage.setItem('end', date!.toDateString())
	}

	return (
		<Container width="full" className={styles.component}>
			<MySelect
				placeholder="Карибы"
				options={optionRegionHome}
				className={styles.col}
				classNamePrefix="select-white"
			/>
			<MySelect
				placeholder="Royalcaribbean"
				options={optionCompanyHome}
				className={styles.col}
				classNamePrefix="select-white"
			/>
			<MyDatepicker
				componentClassName={classNames(styles.col, styles.relative)}
				wrapperClassName={styles.datepickerWrapper}
				inputClassName={styles.inputDatepicker}
				width="half"
				startDate={startDate}
				endDate={endDate}
				onChangeStart={onChangeStartDate}
				onChangeEnd={onChangeEndDate}
			/>
			<Button className={styles.button}>
				НАЙТИ КРУИЗ
			</Button>
		</Container>
	)
}
