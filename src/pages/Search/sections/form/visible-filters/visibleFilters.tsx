import { useContext } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { ru } from 'date-fns/esm/locale'

import { SearchFiltersContext } from '../../../../../context'
import { optionRegionHome, optionCompanyHome } from '../../../../../fakedata'

import { Button, Container, MyDatepicker } from '../../../../../components'

import styles from './visible-filters.module.scss'
import classNames from 'classnames'

export const VisibleFilters = () => {
	const {
		getValueRegion,
		onChangeRegion,
		getValueCompany,
		onChangeCompany,
		startDate,
		endDate,
		onChangeStartDate,
		onChangeEndDate
	} = useContext(SearchFiltersContext)

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
