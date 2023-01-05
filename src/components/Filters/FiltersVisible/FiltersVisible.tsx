import { useContext, useState } from 'react'

import { SearchFiltersContext } from '../../../context'

import { Container, MySelect, MyDatepicker, Button } from '../../../components'

import styles from './filters-visible.module.scss'
import { ISelect } from '../../../model/interfaces'
import { selectAllOption } from '../../MySelect/MultiSelect/MultiSelect'
import { groupedOptions, groupedOptions2 } from '../../../fakedata'

export const FiltersVisible = () => {
	const { date } = useContext(SearchFiltersContext)
	const [select2, setSelect2] = useState<ISelect[]>([selectAllOption])
	const [select3, setSelect3] = useState<ISelect[]>([selectAllOption])

	return (
		<Container width="full" className={styles.component}>
			<MySelect
				selectedOption={select2}
				setSelected={setSelect2}
				optionsGroup={groupedOptions}
				classComponent={styles.col}
				classPrefix="select-white select-default"
				placeholder="Регион круиза"
			/>
			<MySelect
				selectedOption={select3}
				setSelected={setSelect3}
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
