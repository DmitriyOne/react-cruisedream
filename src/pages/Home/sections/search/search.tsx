import { useState } from 'react'
import classNames from 'classnames'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

import { optionCompanyHome, optionRegionHome } from '../../../../model/interfaces'
import { useScrollUp, useWindowSize } from '../../../../hooks'
import { Button, Container } from '../../../../components'
import { Logo } from '../../../../components/Layout/Logo'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './search.module.scss'

export const Search = () => {
	const [currentCountry, setCurrentCountry] = useState('')
	const [startDate, setStartDate] = useState<Date>()
	const {isDesktop} = useWindowSize()
	const { isScroll, isScrollUp, ref } = useScrollUp()

	const isShowBlocks = isScroll && isScrollUp && isDesktop
	const isSticky = isScroll && isDesktop
	const isShowSticky = isScrollUp && isDesktop

	return (
		<Container
			ref={ref}
			width="full"
			className={classNames(
				styles.component,
				isSticky ? styles.sticky : undefined,
				isShowSticky ? styles.show : undefined
			)}
		>
			{isShowBlocks && <Logo className={styles.logo} />}
			<form className={styles.form}>
				<Select
					options={optionRegionHome}
					placeholder="Регион круиза"
					className={classNames(styles.select, styles.col)}
					classNamePrefix="select-search"
				/>
				<Select
					options={optionCompanyHome}
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
			{isShowBlocks &&
				<Button
					className={styles.phone}
				>
					+7 499 653 89 91
				</Button>
			}
		</Container>
	)

}
