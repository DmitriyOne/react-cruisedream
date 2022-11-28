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
	const { isDesktop } = useWindowSize()
	const { isScroll, isScrollUp, ref } = useScrollUp()

	const isFixed = isScroll && isDesktop
	const isShowFixed = isScrollUp && isDesktop

	return (
		<Container
			style={isFixed ? { paddingTop: `${ref.current?.offsetHeight}px` } : undefined}
			ref={ref}
			width="full"
			className={styles.component}
		>
			<Container
				width="full"
				className={classNames(
					styles.container,
					isFixed ? styles.fixed : undefined,
					isShowFixed ? styles.show : undefined
				)}
			>
				<Logo className={classNames(
					styles.logo,
					isFixed ? styles.show : undefined
				)} />
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

				<Button
					className={classNames(
						styles.phone,
						isFixed ? styles.show : undefined
					)}
				>
					+7 499 653 89 91
				</Button>
			</Container>
		</Container>
	)

}
