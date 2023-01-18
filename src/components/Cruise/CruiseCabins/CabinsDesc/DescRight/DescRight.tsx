/* eslint-disable max-len */
import { FC } from 'react'
import classNames from 'classnames'

import { B, Button } from '../../../../../components-ui'
import { ICabinsDescCruise } from '../../../../../model/interfaces'

import styles from './desc-right.module.scss'
import { CRUISE_ROUTES } from '../../../../../constants'

interface IProps {
	id: number
	cabinsDesc: ICabinsDescCruise[]
	activeId: number | null
	checkedId: number | null
	handleChecked: (id: number) => void
}

export const DescRight: FC<IProps> = ({ id, cabinsDesc, activeId, checkedId, handleChecked }) => {

	return (
		<>
			<div className={classNames(styles.header, styles.row)}>
				<div className={styles.item}>
					<span className={styles.text}>
						ПАЛУБА
					</span>
				</div>
				<div className={styles.item}>
					<span className={styles.text}>
						ЦЕНА
					</span>
				</div>
				<div className={styles.item}>
					<span className={styles.text}>
						НАЛИЧИЕ
					</span>
				</div>
			</div>
			<div className={styles.body}>
				{cabinsDesc.map(cabin =>
					<div key={cabin.id} className={styles.row} >
						<div className={styles.item}>
							<a
								href={CRUISE_ROUTES.EMPTY}
								className={styles.link}
								target="_blank"
								rel="noreferrer"
							>
								<span className={classNames(
									styles.code,
									cabin.deck.code === 'A1' ? styles.pink : '',
									cabin.deck.code === 'A2' ? styles.red : '',
									cabin.deck.code === 'BU' ? styles.viol : '',
									cabin.deck.code === 'BY' ? styles.blue : '',
								)}>
									{cabin.deck.code}
								</span>
								<B fontWeight={500} className={styles.deck}>
									{cabin.deck.name}
								</B>
							</a>
						</div>
						<div className={styles.item}>
							<B fontWeight={700} className={styles.price}>
								{cabin.price} $
							</B>
						</div>
						<div className={styles.item}>
							<Button
								className={classNames(
									styles.choose,
									checkedId === cabin.id ? styles.checked : ''
								)}
								onClick={() => handleChecked(cabin.id)}
							>
								{checkedId === cabin.id ? 'Выбрано' : 'Выбрать'}
							</Button>
						</div>
					</div>
				)}
			</div>
			{activeId === id &&
				<div className={styles.hidden}>
					<p className={styles.hiddenText}>
						ПРИМЕР ТЕКСТ международный туристический холдинг, основанный в 1990 году, признанный лидер по европейским направлениям и круизам.В структуру холдинга входит туроператорская  круизной компании MSC Cruises на территории России и ряда стран. В структуру холдинга входит туроператорская  компании MSC Cruises на территории ряда стран.
					</p>
				</div>
			}
		</>
	)
}
