import { useState } from 'react'
import Select from 'react-select'

import { optionLiner, optionTypeCruise, SelectData } from '../../data'

import { Container, Input } from '../../../../../components'

import styles from './hidden-filters.module.scss'
import classNames from 'classnames'

export const HiddenFilters = () => {
	const [checkedOne, setCheckedOne] = useState(true)
	const [checkedTwo, setCheckedTwo] = useState(false)

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
			className={styles.component}
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
				{SelectData.map(item =>
					<div className={styles.col} key={item.id}>
						<label className={styles.label}>
							{item.label}
						</label>
						<Select
							options={item.options}
							placeholder={item.placeholder}
							classNamePrefix={item.className}
						/>
					</div>
				)}
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<label className={styles.label}>
						Круизный лайнер
					</label>
					<Select
						options={optionLiner}
						placeholder="Все"
						classNamePrefix="select-white"
					/>
				</div>
				<div className={classNames(styles.col, styles.flex)}>
					<div className={styles.select}>
						<label className={styles.label}>
							Круизный лайнер
						</label>
						<Select
							options={optionTypeCruise}
							placeholder="Все"
							classNamePrefix="select-white"
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
				<div className={classNames(styles.col, styles.flex)}>
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
