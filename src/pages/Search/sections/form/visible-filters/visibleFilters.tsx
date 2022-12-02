import { useContext } from 'react'
import classNames from 'classnames'

import { SearchFiltersContext } from '../../../../../context'
import { optionRegionHome, optionCompanyHome } from '../../../../../fakedata'

import { Button, Container, MyDatepicker, MySelect } from '../../../../../components'

import styles from './visible-filters.module.scss'

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
			<MySelect
				placeholder="Карибы"
				options={optionRegionHome}
				value={getValueRegion}
				onChange={onChangeRegion}
				className={styles.col}
				classNamePrefix="select-white"
			/>
			<MySelect
				placeholder="Royalcaribbean"
				options={optionCompanyHome}
				value={getValueCompany}
				onChange={onChangeCompany}
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
