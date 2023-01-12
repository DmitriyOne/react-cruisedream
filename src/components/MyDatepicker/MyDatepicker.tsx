import { FC, FormEvent } from 'react'
import classNames from 'classnames'

import DatePicker from 'react-datepicker'
import { ru } from 'date-fns/esm/locale'
import { getMonth, getYear } from 'date-fns'
import range from 'lodash/range'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './my-datepicker.module.scss'
import dayjs from 'dayjs'

interface IProps {
	componentClassName?: string
	wrapperClassName?: string
	inputClassName?: string
	placeholder?: string
	startDate?: Date
	endDate?: Date
	onChange?: (dates: any) => void
}

export const MyDatepicker: FC<IProps> = ({
	componentClassName,
	wrapperClassName,
	inputClassName,
	placeholder,
	startDate,
	endDate,
	onChange,
}) => {
	const years = range(2023, getYear(new Date()) + 10, 1)

	return (
		<div className={classNames(styles.component, componentClassName)}>
			<DatePicker
				wrapperClassName={classNames(styles.datepicker, wrapperClassName)}
				className={classNames(styles.input, inputClassName)}

				selected={startDate}
				startDate={startDate}
				endDate={endDate}
				onChange={onChange!}
				selectsRange

				placeholderText={placeholder}
				locale={ru}
				// dateFormat={'dd.MM.yy'}

				showYearDropdown
				renderCustomHeader={({
					date,
					changeYear,
					changeMonth,
					decreaseMonth,
					increaseMonth,
					prevMonthButtonDisabled,
					nextMonthButtonDisabled,
				}) => (
					<div
						style={{
							margin: 10,
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
							{'<'}
						</button>
						<select
							value={getYear(date)}
							onChange={({ target: { value } }) => changeYear(Number(value))}
						>
							{years.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>

						<div>
							{dayjs(date).format('MMMM')}
						</div>

						<button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
							{'>'}
						</button>
					</div>
				)}
			/>
		</div>
	)
}
