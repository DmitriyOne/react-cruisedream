import { useContext, useState } from 'react'

import { SearchFiltersContext } from '../../../context'
import { groupedOptions, groupedOptions2, allRegionOptions, allCompanyOptions } from '../../../fakedata'
import { ISelect } from '../../../model/interfaces'

import { Container, Button } from '../../../components-ui'
import { MyDatepicker, MySelect } from '../../../components-plugin'

import styles from './filters-visible.module.scss'

export const FiltersVisible = () => {
	const { date } = useContext(SearchFiltersContext)
	const [select0, setSelect0] = useState<ISelect[]>([allRegionOptions])
	const [select1, setSelect1] = useState<ISelect[]>([allCompanyOptions])

	return (
		<Container width="full" className={styles.component}>
			<MySelect
				selectAllOption={allRegionOptions}
				selectedOption={select0}
				setSelected={setSelect0}
				optionsGroup={groupedOptions}
				classComponent={styles.col}
				classPrefix="select-white select-default"
				placeholder="Регион круиза"
				isDefaultSelectAll
			/>
			<MySelect
				selectAllOption={allCompanyOptions}
				selectedOption={select1}
				setSelected={setSelect1}
				optionsGroup={groupedOptions2}
				classComponent={styles.col}
				classPrefix="select-white select-default"
				placeholder="Регион круиза"
			/>
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
