import classNames from 'classnames'
import { useState } from 'react'
import Select from 'react-select'
import DatePicker, { CalendarContainer } from 'react-datepicker'

import { Button, Container } from '../../../../components'
import styles from './search.module.scss'

const options1 = [
	{
		value: 'Регион 1',
		label: 'Регион 1'
	},
	{
		value: 'Регион 2',
		label: 'Регион 2'
	},
	{
		value: 'Регион 3',
		label: 'Регион 3'
	}
]
const options2 = [
	{
		value: 'Компания 	1',
		label: 'Компания  1'
	},
	{
		value: 'Компания  2',
		label: 'Компания  2'
	},
	{
		value: 'Компания 3',
		label: 'Компания 3'
	}
]

export const Search = () => {
	const [currentCountry, setCurrentCountry] = useState('south-korea')
	const [startDate, setStartDate] = useState<Date | null>(new Date())

	// const getValue = () => {
	// 	return currentCountry ? options.find(c => c.value === currentCountry) : ''
	// }

	// const onChange = (newValue: any) => {
	// 	setCurrentCountry(newValue.value)
	// }
	const MyContainer = ({ className = '', children = <></> }) => {
		return (
			<div style={{ padding: '16px', background: '#216ba5', color: '#fff' }}>
				<CalendarContainer className={className}>
					<div style={{ background: '#f0f0f0' }}>
						What is your favorite day?
					</div>
					<div style={{ position: 'relative' }}>{children}</div>
				</CalendarContainer>
			</div>
		)
	}
	return (
		<Container width="full" className={styles.component}>
			<form className={styles.form}>

				<Select
					options={options1}
					placeholder="Регион круиза"
					className={classNames(styles.select, styles.col)}
					classNamePrefix="select-search"
				/>

				<Select
					options={options2}
					placeholder="Круизная компания"
					className={classNames(styles.select, styles.col)}
					classNamePrefix="select-search"
				/>

				<DatePicker
					wrapperClassName={styles.col}
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					calendarContainer={MyContainer}
				/>

				<Button className={styles.button}>
					НАЙТИ КРУИЗ
				</Button>
			</form>
		</Container>
	)

}
