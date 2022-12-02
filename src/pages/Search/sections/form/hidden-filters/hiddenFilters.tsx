import { FC, useContext, useState } from 'react'
import classNames from 'classnames'

import { SearchFiltersContext } from '../../../../../context'
import { optionPort1, optionPort2, optionPort3, optionShip, optionTypeCruise } from '../../../../../fakedata'

import { Container, Input, MySelect } from '../../../../../components'

import styles from './hidden-filters.module.scss'

interface IProps {
	isOpen?: boolean
}

export const HiddenFilters: FC<IProps> = ({ isOpen }) => {
	const [checkedOne, setCheckedOne] = useState(true)
	const [checkedTwo, setCheckedTwo] = useState(false)
	const { 
		getValuePort1, 
		getValuePort2, 
		getValuePort3, 
		getValueShip, 
		getValueTypeCruise, 
		onChangePort1,
		onChangePort2,
		onChangePort3,
		onChangeShip,
		onChangeTypeCruise,
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
						value={getValuePort1}
						onChange={onChangePort1}
						isClearable
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
						value={getValuePort2}
						onChange={onChangePort2}
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
						value={getValuePort3}
						onChange={onChangePort3}
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
						value={getValueShip}
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
							value={getValueTypeCruise}
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
								max={2}
								maxLength={2}
							/>
							<Input
								inputClassName={styles.input}
								type="number"
								placeholder="До"
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
					/>
					<Input
						componentClassName={styles.half}
						inputClassName={styles.input}
						labelClassName={styles.label}
						type="number"
						placeholder="9 000 000"
						labelPosition="top"
						labelText="Цена до"
					/>
				</div>
			</div>
		</Container>
	)
}
