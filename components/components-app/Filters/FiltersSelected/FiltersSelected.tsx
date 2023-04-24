/* eslint-disable max-len */
import { useContext } from 'react'

import { SearchSelectedTitlesContext, SearchSelectorsContext } from '@crdr/context'

import { B, Button, Heading, MyImage } from '@crdr/ui'

import crossIcon from './icons/remove.svg'

import styles from './filters-selected.module.scss'

export const FiltersSelected = () => {
	const { region, onChangeRegion, company, onChangeCompany, datepicker, checkboxes, port, liner, onChangeLiner, typeCruise, onChangeTypeCruise, numberOfdays, price } = useContext(SearchSelectorsContext)
	const { regionTitle, companyTitle, portStartTitle, portIntermediateTitle, portEndTitle, linerTitle, typeCruiseTitle } = useContext(SearchSelectedTitlesContext)

	return (
		<div className={styles.component}>
			<Heading as="h3" className={styles.title}>
				<B fontWeight={500}> Параметры поиска</B>
			</Heading>
			<div className={styles.wrapper}>
				{/* visible selectors */}
				{region.length > 0 &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{regionTitle}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => onChangeRegion([])}
						>
							<MyImage
								imageClass={styles.removeIcon}
								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{company.length > 0 &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{companyTitle}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => onChangeCompany([])}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{datepicker.end &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{datepicker.start.toLocaleDateString('ru-RU',
								{
									day: 'numeric', month: 'numeric', year: '2-digit',
								})}
							-
							{datepicker.end.toLocaleDateString('ru-RU',
								{
									day: 'numeric', month: 'numeric', year: '2-digit',
								})}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => datepicker.onChangeDatepicker(null)}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{/* hidden selectors */}
				{checkboxes.isRiver &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							По реке
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => checkboxes.setIsRiver(false)}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{checkboxes.isSea &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							По морю
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => checkboxes.setIsSea(false)}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{port.start.length > 0 &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{portStartTitle}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => port.onChangePortStart([])}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{port.intermediate.length > 0 &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{portIntermediateTitle}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => port.onChangePortIntermediate([])}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{port.end.length > 0 &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{portEndTitle}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => port.onChangePortEnd([])}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{liner.length > 0 &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{linerTitle}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => onChangeLiner([])}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{typeCruise.length > 0 &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{typeCruiseTitle}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={() => onChangeTypeCruise([])}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{numberOfdays.start && numberOfdays.end &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{numberOfdays.start}
							-
							{numberOfdays.end}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={(e: any) => numberOfdays.onChangeNumberDays(e)}
						>
							<MyImage
								imageClass={styles.removeIcon}

								src={crossIcon}
								alt="Сross icon"
							/>
						</Button>
					</div>
				}
				{price.start && price.end &&
					<div className={styles.optionWrapper}>
						<span className={styles.optionText}>
							{price.start}
							-
							{price.end}
						</span>
						<Button
							className={styles.removeBtn}
							onClick={(e: any) => price.onChangePrice(e)}
						>
							<MyImage
								imageClass={styles.removeIcon}

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

