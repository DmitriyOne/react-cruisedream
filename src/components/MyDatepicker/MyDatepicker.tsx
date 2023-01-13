import { FC } from 'react'
import classNames from 'classnames'

import DatePicker from 'react-datepicker'
import { ru } from 'date-fns/esm/locale'

import { CustomHeader } from './CustomHeader/CustomHeader'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './my-datepicker.module.scss'

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

				onFocus={(e) => e.target.readOnly = true}

				placeholderText={placeholder}
				locale={ru}
				dateFormat={'dd.MM.yy'}

				showYearDropdown
				renderCustomHeader={({ ...params }) => <CustomHeader {...params} />}
			/>
		</div>
	)
}
