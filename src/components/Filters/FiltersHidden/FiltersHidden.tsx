import { FC, useContext, useState } from 'react'
import classNames from 'classnames'

import { SearchFiltersContext } from '../../../context'
import { CheckboxFilter, Container, Input } from '../../../components-ui'

import {
	groupedOptions,
	groupedOptions2,
	allPortStartOptions,
	allPortComingOptions,
	allPortEndOptions,
	allShipsOptions,
	allCruiseTypeOptions
} from '../../../fakedata'
import { ISelect } from '../../../model/interfaces'

import styles from './filters-hidden.module.scss'
import { MySelect } from '../../../components-plugin'

interface IProps {
	isOpen: boolean
}

export const FiltersHidden: FC<IProps> = ({ isOpen }) => {
	const [select3, setSelect3] = useState<ISelect[]>([allPortStartOptions])
	const [select4, setSelect4] = useState<ISelect[]>([allPortComingOptions])
	const [select5, setSelect5] = useState<ISelect[]>([allPortEndOptions])
	const [select6, setSelect6] = useState<ISelect[]>([allShipsOptions])
	const [select7, setSelect7] = useState<ISelect[]>([allCruiseTypeOptions])
	const [checkedRiver, setCheckedRiver] = useState(true)
	const [checkedSea, setCheckedSea] = useState(false)
	const {
		amountDays,
		price
	} = useContext(SearchFiltersContext)

	const handlerChangeOne = () => {
		setCheckedRiver(prev => !prev)
	}

	const handlerChangeTwo = () => {
		setCheckedSea(prev => !prev)
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
				<CheckboxFilter
					componentClassName={styles.checkbox}
					labelText="Река"
					labelPosition="right"
					name="checkbox1"
					checked={checkedRiver}
					onChange={handlerChangeOne}
				/>
				<CheckboxFilter
					componentClassName={styles.checkbox}
					labelText="Море"
					labelPosition="right"
					name="checkbox2"
					checked={checkedSea}
					onChange={handlerChangeTwo}
				/>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<label className={styles.label}>
						Порт отправления
					</label>
					<MySelect
						selectAllOption={allPortStartOptions}
						selectedOption={select3}
						setSelected={setSelect3}
						optionsGroup={groupedOptions}
						classPrefix="select-white select-default"
						placeholder="Сделайте свой выбор"
					/>
				</div>
				<div className={styles.col}>
					<label className={styles.label}>
						Порт захода
					</label>
					<MySelect
						selectAllOption={allPortComingOptions}
						selectedOption={select4}
						setSelected={setSelect4}
						optionsGroup={groupedOptions2}
						classPrefix="select-white select-default"
						placeholder="Сделайте свой выбор"
					/>
				</div>
				<div className={styles.col}>
					<label className={styles.label}>
						Порт прибытия
					</label>
					<MySelect
						selectAllOption={allPortEndOptions}
						selectedOption={select5}
						setSelected={setSelect5}
						optionsGroup={groupedOptions}
						classPrefix="select-white select-default"
						placeholder="Сделайте свой выбор"
					/>
				</div>
			</div>
			<div className={classNames(styles.row, styles.last)}>
				<div className={styles.col}>
					<label className={styles.label}>
						Круизный лайнер
					</label>
					<MySelect
						selectAllOption={allShipsOptions}
						selectedOption={select6}
						setSelected={setSelect6}
						optionsGroup={groupedOptions}
						classPrefix="select-white select-default"
						placeholder="Сделайте свой выбор"
					/>
				</div>
				<div className={classNames(styles.col, styles.flex)}>
					<div className={styles.select}>
						<label className={styles.label}>
							Тип круиза
						</label>
						<MySelect
							selectAllOption={allCruiseTypeOptions}
							selectedOption={select7}
							setSelected={setSelect7}
							optionsGroup={groupedOptions2}
							classPrefix="select-white select-default"
							placeholder="Сделайте свой выбор"
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
				<div className={classNames(styles.col, styles.flex)}>
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
