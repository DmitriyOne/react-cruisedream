import { FC, useContext, useState } from 'react'
import classNames from 'classnames'

import { SearchFiltersContext } from '../../../context'
import { Container, Input, MySelect } from '../../../components'

import styles from './filters-hidden.module.scss'
import { CheckboxFilter } from '../../Input/CheckboxFilter/CheckboxFilter'

interface IProps {
	isOpen: boolean
}

export const FiltersHidden: FC<IProps> = ({ isOpen }) => {
	const [checkedRiver, setCheckedRiver] = useState(true)
	const [checkedSea, setCheckedSea] = useState(false)
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
				</div>
				<div className={styles.col}>
					<label className={styles.label}>
						Порт захода
					</label>
				</div>
				<div className={styles.col}>
					<label className={styles.label}>
						Порт прибытия
					</label>
				</div>
			</div>
			<div className={classNames(styles.row, styles.last)}>
				<div className={styles.col}>
					<label className={styles.label}>
						Круизный лайнер
					</label>
				</div>
				<div className={classNames(styles.col, styles.flex)}>
					<div className={styles.select}>
						<label className={styles.label}>
							Тип круиза
						</label>
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
