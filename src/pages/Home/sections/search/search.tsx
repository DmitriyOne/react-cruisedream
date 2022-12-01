import { FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { ru } from 'date-fns/esm/locale'

import { CRUISE_ROUTES, CRUISE_SOCIAL_LINKS } from '../../../../constants'
import { useScrollUp, useWindowSize } from '../../../../hooks'
import { SearchFiltersContext } from '../../../../context'
import { optionRegionHome, optionCompanyHome } from '../../../../fakedata'

import { Button, Container, Logo } from '../../../../components'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './search.module.scss'

export const Search = () => {
	const navigate = useNavigate()
	const [startDate, setStartDate] = useState<Date>()
	const { isDesktop } = useWindowSize()
	const { isScroll, isScrollUp, ref } = useScrollUp()
	const { getValueRegion, onChangeRegion, getValueCompany, onChangeCompany } = useContext(SearchFiltersContext)

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
					<Select
						options={optionRegionHome}
						placeholder="Регион круиза"
						className={classNames(styles.select, styles.col)}
						classNamePrefix="select-transparent"
						value={getValueRegion()}
						onChange={onChangeRegion}
					/>
					<Select
						options={optionCompanyHome}
						placeholder="Круизная компания"
						className={classNames(styles.select, styles.col)}
						classNamePrefix="select-transparent"
						value={getValueCompany()}
						onChange={onChangeCompany}
					/>
					<div className={styles.col}>
						<DatePicker
							wrapperClassName={classNames(styles.datepicker)}
							selected={startDate}
							onChange={(date: Date) => setStartDate(date)}
							placeholderText="Даты круиза"
							className={styles.inputDatepicker}
							locale={ru}
							dateFormat={'dd.MM.yyyy'}
						/>
					</div>
					<Button
						className={styles.button}
						onClick={handlerClick}
					>
						НАЙТИ КРУИЗ
					</Button>
				</form>
				<Button
					href={`tel:${CRUISE_SOCIAL_LINKS.phone}`}
					className={classNames(
						styles.phone,
						isFixed ? styles.show : undefined
					)}
				>
					+7 499 653 89 91
				</Button>
			</Container>
		</Container >
	)
}
