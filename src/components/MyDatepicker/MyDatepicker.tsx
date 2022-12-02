import { FC } from 'react'
import classNames from 'classnames'

import DatePicker from 'react-datepicker'
import { ru } from 'date-fns/esm/locale'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './my-datepicker.module.scss'

interface IProps {
	width?: 'full' | 'half'
	componentClassName?: string
	wrapperClassName?: string
	inputClassName?: string
	placeholder?: string
	startDate?: Date
	endDate?: Date
	onChange?: (dates: any) => void
	onChangeStart?: (dates: any) => void
	onChangeEnd?: (dates: any) => void
}

export const MyDatepicker: FC<IProps> = ({
	width = 'full',
	componentClassName,
	wrapperClassName,
	inputClassName,
	placeholder,
	startDate,
	endDate,
	onChange,
	onChangeStart,
	onChangeEnd,
}) => {

	const isFull = width === 'full'
	return (
		<>
			{isFull
				?
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
						dateFormat={'dd.MM.yy'}
					/>
				</div>
				:
				<>
					<div className={componentClassName}>
						<DatePicker
							wrapperClassName={classNames(styles.datepicker, wrapperClassName)}
							selected={startDate}
							onChange={onChangeStart!}
							placeholderText="11.03.23"
							className={classNames(styles.input, inputClassName)}
							dateFormat={'dd.MM.yyyy'}
							startDate={startDate}
							endDate={endDate}
							locale={ru}
							selectsStart
						/>
					</div>
					<div className={componentClassName}>
						<DatePicker
							wrapperClassName={classNames(styles.datepicker, wrapperClassName)}
							selected={endDate}
							onChange={onChangeEnd!}
							placeholderText="25.03.23"
							className={classNames(styles.input, inputClassName)}
							dateFormat={'dd.MM.yyyy'}
							startDate={startDate}
							endDate={endDate}
							locale={ru}
							selectsEnd

						/>
					</div>
				</>
			}
		</>
	)
}
