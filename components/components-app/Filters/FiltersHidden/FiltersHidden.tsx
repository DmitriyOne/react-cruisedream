/* eslint-disable max-len */
import { FC, useContext } from 'react'
import classNames from 'classnames'

import { SearchSelectorsContext } from '@crdr/context'

import { LinerSelect, PortEndSelect, PortIntermediateSelect, PortStartSelect, TypeCruiseSelect } from '@crdr/components'
import { CheckboxFilter, Container, Input } from '@crdr/ui'

import styles from './filters-hidden.module.scss'

interface IProps {
	isOpen: boolean
	isBgImage?: boolean
}

export const FiltersHidden: FC<IProps> = ({ isOpen, isBgImage }) => {
	const { numberOfdays, price, checkboxes } = useContext(SearchSelectorsContext)

	const labelClassName = classNames(styles.label, {
		[styles.darkText]: isBgImage,
	})

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
					checked={checkboxes.isRiver}
					onChange={() => checkboxes.setIsRiver(prev => !prev)}
				/>
				<CheckboxFilter
					componentClassName={styles.checkbox}
					labelText="Море"
					labelPosition="right"
					name="checkbox2"
					checked={checkboxes.isSea}
					onChange={() => checkboxes.setIsSea(prev => !prev)}
				/>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<PortStartSelect
						labelClass={labelClassName}
						classPrefix="select-white"
					/>
				</div>
				<div className={styles.col}>
					<PortIntermediateSelect
						labelClass={labelClassName}
						classPrefix="select-white"
					/>
				</div>
				<div className={styles.col}>
					<PortEndSelect
						labelClass={labelClassName}
						classPrefix="select-white"
					/>
				</div>
			</div>
			<div className={classNames(styles.row, styles.last)}>
				<div className={styles.col}>
					<LinerSelect
						labelClass={labelClassName}
						classPrefix="select-white"
					/>
				</div>
				<div className={classNames(styles.col, styles.flex)}>
					<div className={styles.select}>
						<TypeCruiseSelect
							labelClass={labelClassName}
							classPrefix="select-white"
						/>
					</div>
					<div className={styles.amountDays}>
						<label className={classNames(labelClassName, styles.inputLabel)}>
							Кол-во дней
						</label>
						<div className={styles.inputWrapper}>
							<Input
								inputClassName={styles.input}
								name="start"
								type="number"
								placeholder="От"
								value={numberOfdays.start.toString()}
								onChange={(e) => numberOfdays.onChangeNumberDays(e)}
							/>
							<Input
								inputClassName={styles.input}
								name="end"
								type="number"
								placeholder="До"
								value={numberOfdays.end.toString()}
								onChange={(e) => numberOfdays.onChangeNumberDays(e)}
							/>
						</div>
					</div>
				</div>
				<div className={classNames(styles.col, styles.flex)}>
					<Input
						componentClassName={styles.half}
						inputClassName={styles.input}
						labelClassName={labelClassName}
						name="start"
						type="number"
						placeholder="0"
						labelPosition="top"
						labelText="Цена от"
						value={price.start}
						onChange={price.onChangePrice}
					/>
					<Input
						componentClassName={styles.half}
						inputClassName={styles.input}
						labelClassName={labelClassName}
						name="end"
						type="number"
						placeholder="9 000 000"
						labelPosition="top"
						labelText="Цена до"
						value={price.end}
						onChange={price.onChangePrice}
					/>
				</div>
			</div>
		</Container>
	)
}
