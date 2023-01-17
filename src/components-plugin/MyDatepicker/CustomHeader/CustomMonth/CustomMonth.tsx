import { FC, FormEvent } from 'react'
import classNames from 'classnames'

import { getMonth } from 'date-fns'

import { Button } from '../../../../components-ui/Button'

import iconButton from '../../icon/arrow-blue.svg'

import styles from '../custom-header.module.scss'

interface IProps {
	date: Date
	decreaseMonth: () => void
	increaseMonth: () => void
	prevMonthButtonDisabled: boolean
	nextMonthButtonDisabled: boolean
}

const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
]

export const CustomMonth: FC<IProps> = ({
	date,
	decreaseMonth,
	increaseMonth,
	prevMonthButtonDisabled,
	nextMonthButtonDisabled,
}) => {
	const handlerYearPrev = (e: FormEvent) => {
		e.preventDefault()
		decreaseMonth()
	}

	const handlerYearNext = (e: FormEvent) => {
		e.preventDefault()
		increaseMonth()
	}

	return (
		<div className={styles.componentCustomMonth}>
			<Button
				className={classNames(styles.buttonArrow, styles.prev)}
				onClick={(e) => handlerYearPrev(e)}
				disabled={prevMonthButtonDisabled}
			>
				<img
					className={styles.image}
					src={iconButton}
					alt="Arrow icon"
				/>
			</Button>
			<span className={styles.monthText}>
				{months[getMonth(date)]}
			</span>
			<Button
				className={classNames(styles.buttonArrow, styles.next)}
				onClick={(e) => handlerYearNext(e)}
				disabled={nextMonthButtonDisabled}
			>
				<img
					className={styles.image}
					src={iconButton}
					alt="Arrow icon"
				/>
			</Button>
		</div>
	)
}
