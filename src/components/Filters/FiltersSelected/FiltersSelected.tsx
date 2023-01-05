import { FormEvent, useContext } from 'react'

import { SearchFiltersContext } from '../../../context'
import { B, Heading, Button } from '../../../components'

import crossIcon from './icons/remove.svg'

import styles from './filters-selected.module.scss'

export const FiltersSelected = () => {
	const { amountDays, price, date } = useContext(SearchFiltersContext)

	const handlerRemoveAmountDays = (e: FormEvent) => {
		e.preventDefault()
		amountDays.resetAmountStart()
		amountDays.resetAmountEnd()
	}

	const handlerRemovePrice = (e: FormEvent) => {
		e.preventDefault()
		price.resetPriceStart()
		price.resetPriceEnd()
	}

	const handlerRemoveDate = (e: FormEvent) => {
		e.preventDefault()
		date.resetDates()
	}

	return (
		<div className={styles.component}>
			<Heading as="h3" className={styles.title}>
				<B fontWeight={500}> Параметры поиска</B>
			</Heading>
			<div className={styles.wrapper}>
				{date.dateStart && date.dateEnd &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{date.dateStart.toLocaleDateString('ru-RU',
								{
									day: 'numeric', month: 'numeric', year: '2-digit'
								})}
							-
							{date.dateEnd.toLocaleDateString('ru-RU',
								{
									day: 'numeric', month: 'numeric', year: '2-digit'
								})}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={handlerRemoveDate}
						>
							<img
								className={styles.removeIcon}
								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{amountDays.amountStart && amountDays.amountEnd &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{amountDays.amountStart}
							-
							{amountDays.amountEnd}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={handlerRemoveAmountDays}
						>
							<img
								className={styles.removeIcon}
								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{price.priceStart && price.priceEnd &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{price.priceStart}
							-
							{price.priceEnd}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={handlerRemovePrice}
						>
							<img
								className={styles.removeIcon}
								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
			</div>
		</div>
	)
}

