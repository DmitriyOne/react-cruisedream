import { useState } from 'react'

import { SwiperChooseCruiseDate } from '@crdr/components'
import { MyDatepicker } from '@crdr/plugins'
import { B } from '@crdr/ui'

import styles from './cruise-choose-date.module.scss'

export const CruiseChooseDate = () => {
	const today = new Date()
	const nextDay = new Date(today)
	nextDay.setDate(today.getDate() + 7)
	const [startDate, setStartDate] = useState<Date>(today)
	const [endDate, setEndDate] = useState<Date>(nextDay)

	const onChangeDates = (dates: any) => {
		const [start, end] = dates
		setStartDate(start)
		setEndDate(end)
	}

	return (
		<>
			<div className={styles.component}>
				<B fontWeight={600} className={styles.title}>
					Выберите дату круиза
				</B>
				<MyDatepicker
					componentClassName={styles.datepicker}
					wrapperClassName={styles.datepickerWrapper}
					inputClassName={styles.inputDatepicker}
					startDate={startDate}
					endDate={endDate}
					onChange={onChangeDates}
				/>
			</div>
			<SwiperChooseCruiseDate />
		</>
	)
}
