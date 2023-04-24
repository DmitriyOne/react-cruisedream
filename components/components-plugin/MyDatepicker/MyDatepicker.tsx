import { FC } from 'react'
import classNames from 'classnames'
import { ru } from 'date-fns/esm/locale'
import DatePicker from 'react-datepicker'

import { CustomHeader } from './CustomHeader/CustomHeader'

import styles from './my-datepicker.module.scss'

interface IProps {
	componentClassName?: string
	wrapperClassName?: string
	inputClassName?: string
	placeholder?: string
	startDate?: Date
	endDate?: Date
	// eslint-disable-next-line no-unused-vars
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

				onFocus={e => e.target.blur()}
				onBlur={e => e.target.blur()}

				placeholderText={placeholder}
				locale={ru}
				dateFormat={'dd.MM.yy'}

				showYearDropdown
				renderCustomHeader={({ ...params }) => <CustomHeader {...params} />}
			/>
		</div>
	)
}
