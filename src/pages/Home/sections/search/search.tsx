import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { CRUISE_ROUTES } from '../../../../constants'
import { useScrollUp, useWindowSize } from '../../../../hooks'
import { optionRegionHome, optionCompanyHome } from '../../../../fakedata'

import { Button, Container, Logo, MyDatepicker, MySelect } from '../../../../components'

import styles from './search.module.scss'

export const Search = () => {
	const navigate = useNavigate()
	const { isDesktop } = useWindowSize()
	const { isScroll, isScrollUp, ref } = useScrollUp()
	const [startDate, setStartDate] = useState<Date>()
	const [endDate, setEndDate] = useState<Date>()

	const onChangeDates = (dates: any) => {
		const [start, end] = dates
		setStartDate(start)
		setEndDate(end)
		// localStorage.setItem('start', start!.toDateString())
		// if (end === null) {
		// 	return
		// }
		// localStorage.setItem('end', end!.toDateString())
	}

	const handlerClick = (e: FormEvent) => {
		e.preventDefault()
		navigate(CRUISE_ROUTES.SEARCH)
	}

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
					<MySelect
						options={optionRegionHome}
						placeholder="Регион круиза"
						className={styles.col}
						classNamePrefix="select-transparent"
					/>
					<MySelect
						options={optionCompanyHome}
						placeholder="Круизная компания"
						className={styles.col}
						classNamePrefix="select-transparent"
					/>
					<MyDatepicker
						componentClassName={styles.col}
						wrapperClassName={styles.datepickerWrapper}
						inputClassName={styles.inputDatepicker}
						placeholder="Даты круиза"
						startDate={startDate}
						endDate={endDate}
						onChange={onChangeDates}
					/>
					<Button
						className={styles.button}
						onClick={handlerClick}
					>
						НАЙТИ КРУИЗ
					</Button>
				</form>
			</Container>
		</Container >
	)
}
