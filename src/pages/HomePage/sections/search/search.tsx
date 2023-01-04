import { FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { SearchFiltersContext } from '../../../../context'
import { CRUISE_ROUTES, CRUISE_SOCIAL_LINKS } from '../../../../constants'
import { useScrollUp, useWindowSize } from '../../../../hooks'
import { groupedOptions, groupedOptions2, optionSortCurrency } from '../../../../fakedata'

import { Button, Container, Logo, MyDatepicker, MySelect } from '../../../../components'

import styles from './search.module.scss'
import { ISelect } from '../../../../model/interfaces'
import { selectAllOption } from '../../../../components/MySelect/MultiSelect/MultiSelect'

export const Search = () => {
	const navigate = useNavigate()
	const { isDesktop } = useWindowSize()
	const { isScroll, isScrollUp, ref } = useScrollUp()
	const { date } = useContext(SearchFiltersContext)
	const [select0, setSelect0] = useState<ISelect[]>([selectAllOption])
	const [select1, setSelect1] = useState<ISelect[]>([selectAllOption])

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
						selectedOption={select0}
						setSelected={setSelect0}
						optionsGroup={groupedOptions2}
						classComponent={styles.col}
						classPrefix="select-transparent select-default"
						placeholder="Регион круиза"
					/>
					<MySelect
						selectedOption={select1}
						setSelected={setSelect1}
						optionsGroup={groupedOptions}
						classComponent={styles.col}
						classPrefix="select-transparent select-default"
						placeholder="Круизная компания"
					/>
					<MyDatepicker
						componentClassName={styles.col}
						wrapperClassName={styles.datepickerWrapper}
						inputClassName={styles.inputDatepicker}
						placeholder="Даты круиза"
						startDate={date.dateStart}
						endDate={date.dateEnd}
						onChange={date.onChangeDates}
					/>
					<Button
						className={styles.button}
						onClick={handlerClick}
					>
						НАЙТИ КРУИЗ
					</Button>
				</form>
				<div>
					<a
						href={`tel:${CRUISE_SOCIAL_LINKS.phone}>`}
						className={classNames(
							styles.phone,
							isFixed ? styles.show : undefined
						)}
					>
						+7 499 653 89 91
					</a>
				</div>
			</Container>
		</Container >
	)
}
