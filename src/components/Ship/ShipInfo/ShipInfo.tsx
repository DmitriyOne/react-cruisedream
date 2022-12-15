import { FC } from 'react'

import { Heading, B } from '../../../components'

import styles from './ship-info.module.scss'

interface IProps {
	year: number
	capacity: number
	weight: number
	team: number
}

export const ShipInfo: FC<IProps> = ({
	year,
	capacity,
	weight,
	team
}) => {

	return (
		<div className={styles.component}>
			<div className={styles.col}>
				<Heading as="h5" className={styles.title}>
					Год постройки:
				</Heading>
				<B fontWeight={600} className={styles.number}>
					{year}
				</B>
			</div>
			<div className={styles.col}>
				<Heading as="h5" className={styles.title}>
					Вместимость:
				</Heading>
				<B fontWeight={600} className={styles.number}>
					{capacity}
				</B>
			</div>
			<div className={styles.col}>
				<Heading as="h5" className={styles.title}>
					Водоизмещение:
				</Heading>
				<B fontWeight={600} className={styles.number}>
					{weight}
				</B>
			</div>
			<div className={styles.col}>
				<Heading as="h5" className={styles.title}>
					Команда:
				</Heading>
				<B fontWeight={600} className={styles.number}>
					{team}
				</B>
			</div>
		</div>
	)
}
