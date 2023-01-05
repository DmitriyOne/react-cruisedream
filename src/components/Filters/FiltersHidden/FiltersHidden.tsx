import { FC, useContext, useState } from 'react'
import classNames from 'classnames'

import { SearchFiltersContext } from '../../../context'
import { Container, Input, MySelect } from '../../../components'
import { groupedOptions, groupedOptions2 } from '../../../fakedata'

import styles from './filters-hidden.module.scss'
import { CheckboxFilter } from '../../Input/CheckboxFilter/CheckboxFilter'
import { ISelect } from '../../../model/interfaces'
import { selectAllOption } from '../../MySelect/MultiSelect/MultiSelect'

interface IProps {
	isOpen: boolean
}

export const FiltersHidden: FC<IProps> = ({ isOpen }) => {
	const [select5, setSelect5] = useState<ISelect[]>([selectAllOption])
	const [select6, setSelect6] = useState<ISelect[]>([selectAllOption])
	const [select7, setSelect7] = useState<ISelect[]>([selectAllOption])
	const [select8, setSelect8] = useState<ISelect[]>([selectAllOption])
	const [select9, setSelect9] = useState<ISelect[]>([selectAllOption])
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
						selectedOption={select5}
						setSelected={setSelect5}
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
						selectedOption={select6}
						setSelected={setSelect6}
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
						selectedOption={select7}
						setSelected={setSelect7}
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
						selectedOption={select8}
						setSelected={setSelect8}
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
							selectedOption={select9}
							setSelected={setSelect9}
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
