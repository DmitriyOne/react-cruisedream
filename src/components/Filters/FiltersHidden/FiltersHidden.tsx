import { FC, useContext, useState } from 'react'
import classNames from 'classnames'

import { SearchFiltersContext } from '../../../context'
import { Container, Input, MySelect } from '../../../components'

import { optionPort1, optionPort2, optionPort3, optionShip, optionTypeCruise } from '../../../fakedata'

import styles from './filters-hidden.module.scss'

interface IProps {
	isOpen: boolean
}

export const FiltersHidden: FC<IProps> = ({ isOpen }) => {
	const [checkedOne, setCheckedOne] = useState(true)
	const [checkedTwo, setCheckedTwo] = useState(false)
	const {
		ship,
		typeCruise,
		port1,
		port2,
		port3,
		onChangePort1,
		onChangePort2,
		onChangePort3,
		onChangeShip,
		onChangeTypeCruise,
		amountDays,
		price
	} = useContext(SearchFiltersContext)

	const handlerChangeOne = () => {
		setCheckedOne(prev => !prev)
	}

	const handlerChangeTwo = () => {
		setCheckedTwo(prev => !prev)
	}

	return (
		<Container
			width="full"
			direction="column"
			className={classNames(
				styles.component,
				isOpen ? styles.active : undefined
			)}
			justify="start"
			align="start"
		>
			<div className={styles.row}>
				<Input
					componentClassName={styles.checkbox}
					type="checkbox"
					labelText="Река"
					labelPosition="right"
					name="checkbox1"
					checked={checkedOne}
					onChange={handlerChangeOne}
				/>
				<Input
					componentClassName={styles.checkbox}
					type="checkbox"
					labelText="Море"
					labelPosition="right"
					name="checkbox2"
					checked={checkedTwo}
					onChange={handlerChangeTwo}
				/>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<label className={styles.label}>
						Порт отправления
					</label>
					<MySelect
						options={optionPort1}
						placeholder="Все"
						classNamePrefix="select-white"
						onChange={onChangePort1}
						value={port1}
					/>
				</div>
				<div className={styles.col}>
					<label className={styles.label}>
						Порт захода
					</label>
					<MySelect
						options={optionPort2}
						placeholder="Все"
						classNamePrefix="select-white"
						onChange={onChangePort2}
						value={port2}
					/>
				</div>
				<div className={styles.col}>
					<label className={styles.label}>
						Порт прибытия
					</label>
					<MySelect
						options={optionPort3}
						placeholder="Все"
						classNamePrefix="select-white"
						onChange={onChangePort3}
						value={port3}
					/>
				</div>
			</div>
			<div className={classNames(styles.row, styles.last)}>
				<div className={styles.col}>
					<label className={styles.label}>
						Круизный лайнер
					</label>
					<MySelect
						options={optionShip}
						placeholder="Все"
						classNamePrefix="select-white"
						value={ship}
						onChange={onChangeShip}
					/>
				</div>
				<div className={classNames(styles.col, styles.flex)}>
					<div className={styles.select}>
						<label className={styles.label}>
							Тип круиза
						</label>
						<MySelect
							options={optionTypeCruise}
							placeholder="Все"
							classNamePrefix="select-white"
							value={typeCruise}
							onChange={onChangeTypeCruise}
						/>
					</div>
					<div className={styles.amountDays}>
						<label className={classNames(styles.label, styles.inputLabel)}>
							Кол-во дней
						</label>
						<div className={styles.inputWrapper}>
							<Input
								inputClassName={styles.input}
								type="number"
								placeholder="От"
								value={amountDays.amountStart}
								onChange={amountDays.onChangeAmountStart}
							/>
							<Input
								inputClassName={styles.input}
								type="number"
								placeholder="До"
								value={amountDays.amountEnd}
								onChange={amountDays.onChangeAmountEnd}
							/>
						</div>
					</div>
				</div>
				<div
					className={classNames(styles.col, styles.flex)}
				>
					<Input
						componentClassName={styles.half}
						inputClassName={styles.input}
						labelClassName={styles.label}
						type="number"
						placeholder="0"
						labelPosition="top"
						labelText="Цена от"
						value={price.priceStart}
						onChange={price.onChangePriceStart}
					/>
					<Input
						componentClassName={styles.half}
						inputClassName={styles.input}
						labelClassName={styles.label}
						type="number"
						placeholder="9 000 000"
						labelPosition="top"
						labelText="Цена до"
						value={price.priceEnd}
						onChange={price.onChangePriceEnd}
					/>
				</div>
			</div>
		</Container>
	)
}
