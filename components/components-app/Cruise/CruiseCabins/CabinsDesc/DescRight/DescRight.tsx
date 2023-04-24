/* eslint-disable max-len */
import { FC } from 'react'
import classNames from 'classnames'

import { CRUISE_ROUTES } from '@crdr/constants'

import { ICabinsContentCruise } from '@crdr/interfaces'

import { B, Button } from '@crdr/ui'

import styles from './desc-right.module.scss'

interface IProps {
	id: number
	cabinsContent: ICabinsContentCruise[]
	cabinsDescription: string
	activeId: number | null
	checkedId: number | null
	// eslint-disable-next-line no-unused-vars
	handleChecked: (id: number) => void
}

export const DescRight: FC<IProps> = ({ id, cabinsContent, cabinsDescription, activeId, checkedId, handleChecked }) => {

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
				{cabinsContent.map(cabin =>
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
						{cabinsDescription}
					</p>
				</div>
			}
		</>
	)
}
