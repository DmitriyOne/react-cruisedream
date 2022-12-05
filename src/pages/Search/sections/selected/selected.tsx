import { FormEvent, useContext } from 'react'

import { SearchFiltersContext } from '../../../../context'
import { B, Button, Container, Heading } from '../../../../components'

import crossIcon from './icons/remove.svg'

import styles from './selected.module.scss'

export const Selected = () => {
	const {
		region,
		onChangeRegion,
		cruise,
		onChangeCruise,
		port1,
		onChangePort1,
		port2,
		onChangePort2,
		port3,
		onChangePort3,
		ship,
		onChangeShip,
		typeCruise,
		onChangeTypeCruise,
		amountDays,
		price,
		date
	} = useContext(SearchFiltersContext)

	const handlerRemoveRegion = (e: FormEvent) => {
		e.preventDefault()
		onChangeRegion('')
	}

	const handlerRemoveCruise = (e: FormEvent) => {
		e.preventDefault()
		onChangeCruise('')
	}

	const handlerRemovePort1 = (e: FormEvent) => {
		e.preventDefault()
		onChangePort1('')
	}

	const handlerRemovePort2 = (e: FormEvent) => {
		e.preventDefault()
		onChangePort2('')
	}

	const handlerRemovePort3 = (e: FormEvent) => {
		e.preventDefault()
		onChangePort3('')
	}

	const handlerRemoveShip = (e: FormEvent) => {
		e.preventDefault()
		onChangeShip('')
	}

	const handlerRemoveTypeCruise = (e: FormEvent) => {
		e.preventDefault()
		onChangeTypeCruise('')
	}

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
		date.resetDateStart()
		date.resetDateEnd()
	}

	return (
		<Container width="full" className={styles.component}>
			<Container className={styles.container} justify="center" align="center">
				<Heading as="h3" className={styles.title}>
					<B fontWeight={500}> Параметры поиска</B>
				</Heading>
				<div className={styles.wrapper}>
					{region &&
						<div className={styles.optionWrapper}>
							<span className={styles.optionText}>
								{region.value}
							</span>
							<Button
								className={styles.removeBtn}
								onClick={handlerRemoveRegion}
							>
								<img
									className={styles.removeIcon}
									src={crossIcon}
									alt="Сross icon"
								/>
							</Button>
						</div>
					}
					{cruise &&
						<div className={styles.optionWrapper}>
							<span className={styles.optionText}>
								{cruise.value}
							</span>
							<Button
								className={styles.removeBtn}
								onClick={handlerRemoveCruise}
							>
								<img
									className={styles.removeIcon}
									src={crossIcon}
									alt="Сross icon"
								/>
							</Button>
						</div>
					}
					{date.dateStart && date.dateEnd &&
						<div className={styles.optionWrapper}>
							<span className={styles.optionText}>
								{date.dateStart.toLocaleDateString('ru-RU')}
								-
								{date.dateEnd.toLocaleDateString('ru-RU')}
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
					{port1 &&
						<div className={styles.optionWrapper}>
							<span className={styles.optionText}>
								{port1.value}
							</span>
							<Button
								className={styles.removeBtn}
								onClick={handlerRemovePort1}
							>
								<img
									className={styles.removeIcon}
									src={crossIcon}
									alt="Сross icon"
								/>
							</Button>
						</div>
					}
					{port2 &&
						<div className={styles.optionWrapper}>
							<span className={styles.optionText}>
								{port2.value}
							</span>
							<Button
								className={styles.removeBtn}
								onClick={handlerRemovePort2}
							>
								<img
									className={styles.removeIcon}
									src={crossIcon}
									alt="Сross icon"
								/>
							</Button>
						</div>
					}
					{port3 &&
						<div className={styles.optionWrapper}>
							<span className={styles.optionText}>
								{port3.value}
							</span>
							<Button
								className={styles.removeBtn}
								onClick={handlerRemovePort3}
							>
								<img
									className={styles.removeIcon}
									src={crossIcon}
									alt="Сross icon"
								/>
							</Button>
						</div>
					}
					{ship &&
						<div className={styles.optionWrapper}>
							<span className={styles.optionText}>
								{ship.value}
							</span>
							<Button
								className={styles.removeBtn}
								onClick={handlerRemoveShip}
							>
								<img
									className={styles.removeIcon}
									src={crossIcon}
									alt="Сross icon"
								/>
							</Button>
						</div>
					}
					{typeCruise &&
						<div className={styles.optionWrapper}>
							<span className={styles.optionText}>
								{typeCruise.value}
							</span>
							<Button
								className={styles.removeBtn}
								onClick={handlerRemoveTypeCruise}
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
			</Container>
		</Container>
	)
}
