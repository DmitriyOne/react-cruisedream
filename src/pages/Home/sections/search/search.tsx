import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

import { Button, Container } from '../../../../components'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './search.module.scss'
import { Logo } from '../../../../components/Layout/Logo'
import { useWindowSize } from '../../../../hooks'

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
	const [currentCountry, setCurrentCountry] = useState('')
	const [startDate, setStartDate] = useState<Date>()
	const ref = useRef<HTMLDivElement>(null)
	const { isTablet } = useWindowSize()
	const [isScroll, setIsScroll] = useState<boolean | undefined>(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			const el = ref.current!.getBoundingClientRect().top
			const isCurrentScroll = !isTablet && Math.round(el) <= 0
			setIsScroll(isCurrentScroll)
		})
	})

	// const getValue = () => {
	// 	return currentCountry ? options.find(c => c.value === currentCountry) : ''
	// }

	// const onChange = (newValue: any) => {
	// 	setCurrentCountry(newValue.value)
	// }

	return (
		<Container
			ref={ref}
			width="full"
			className={classNames(
				styles.component,
				isScroll ? styles.sticky : undefined
			)}
		>

			{isScroll && <Logo className={styles.logo} />}

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
				<div className={styles.col}>
					<DatePicker
						wrapperClassName={classNames(styles.datepicker)}
						selected={startDate}
						onChange={(date: Date) => setStartDate(date)}
						placeholderText="Даты круиза"
						className={styles.inputDatepicker}
					/>
				</div>
				<Button className={styles.button}>
					НАЙТИ КРУИЗ
				</Button>
			</form>
			{isScroll &&
				<Button
					className={styles.phone}
				>
					+7 499 653 89 91
				</Button>
			}
		</Container>
	)

}
