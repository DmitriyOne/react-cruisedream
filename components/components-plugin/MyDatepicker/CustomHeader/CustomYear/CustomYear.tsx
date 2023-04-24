import { ChangeEvent, FC } from 'react'
import { getYear } from 'date-fns'
import range from 'lodash/range'

import styles from '../custom-header.module.scss'

interface IProps {
	date: Date
	// eslint-disable-next-line no-unused-vars
	changeYear: (year: number) => void
}

export const CustomYear: FC<IProps> = ({ date, changeYear }) => {
	const years = range(2023, getYear(new Date()) + 10, 1)

	const onChangeYear = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
		changeYear(Number(value))
	}
	return (
		<div className={styles.componentCustomYear}>
			<select
				className={styles.select}
				value={getYear(date)}
				onChange={(value) => onChangeYear(value)}
			>
				{years.map((option) => (
					<option
						key={option}
						value={option}
					>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}
