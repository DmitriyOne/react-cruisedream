import { Heading, B } from '../../../components-ui'

import styles from './ship-info-short.module.scss'

export const ShipInfoShort = () => {

	return (
		<div className={styles.component}>
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
					Вместимость:
				</Heading>
				<B fontWeight={600} className={styles.number}>
					3935
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
					Команда:
				</Heading>
				<B fontWeight={600} className={styles.number}>
					1200
				</B>
			</div>
		</div>
	)
}
