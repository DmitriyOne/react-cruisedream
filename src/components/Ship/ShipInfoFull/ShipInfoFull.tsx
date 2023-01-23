import { Heading, B } from '../../../components-ui'

import styles from './ship-info-full.module.scss'

export const ShipInfoFull = () => {

	return (
		<div className={styles.component}>
			<div className={styles.row}>
				<div className={styles.col}>
					<Heading as="h5" className={styles.title}>
						Год постройки:
					</Heading>
					<B fontWeight={600} className={styles.number}>
						2009
					</B>
				</div>
				<div className={styles.col}>
					<Heading as="h5" className={styles.title}>
						Год реновации:
					</Heading>
					<B fontWeight={600} className={styles.number}>
						-
					</B>
				</div>
				<div className={styles.col}>
					<Heading as="h5" className={styles.title}>
						Водоизмещение:
					</Heading>
					<B fontWeight={600} className={styles.number}>
						1333
					</B>
				</div>
				<div className={styles.col}>
					<Heading as="h5" className={styles.title}>
						Кают:
					</Heading>
					<B fontWeight={600} className={styles.number}>
						1200
					</B>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<Heading as="h5" className={styles.title}>
						Длина:
					</Heading>
					<B fontWeight={600} className={styles.number}>
						333 м.
					</B>
				</div>
				<div className={styles.col}>
					<Heading as="h5" className={styles.title}>
						Ширина:
					</Heading>
					<B fontWeight={600} className={styles.number}>
						47 м.
					</B>
				</div>
				<div className={styles.col}>
					<Heading as="h5" className={styles.title}>
						Пассажиров:
					</Heading>
					<B fontWeight={600} className={styles.number}>
						6 762
					</B>
				</div>
				<div className={styles.col}>
					<Heading as="h5" className={styles.title}>
						Команда:
					</Heading>
					<B fontWeight={600} className={styles.number}>
						2 050
					</B>
				</div>
			</div>

		</div>
	)
}
