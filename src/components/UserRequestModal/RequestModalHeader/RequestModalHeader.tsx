import classNames from 'classnames'

import { Heading, B } from '../../../components-ui'

import styles from '../user-request-modal.module.scss'

export const RequestModalHeader = () => {
	return (
		<div className={styles.header}>
			<div className={styles.headerLeft}>
				<Heading as="h2" className={styles.title}>
					ВАШ ЗАПРОС
				</Heading>
				<B fontWeight={500} className={classNames(styles.text1, styles.year)}>
					2024
				</B>
				<B fontWeight={500} className={classNames(styles.text1, styles.deckAndCabin)}>
					Палуба 1 - Каюта(IB)
				</B>
			</div>
			<div className={styles.headerRight}>
				<B fontWeight={500} className={classNames(styles.text1)}>
					Номер круиза
				</B>
				<B fontWeight={600} className={classNames(styles.text1, styles.numberCruise)} >
					2009730
				</B>
			</div>
		</div>
	)
}
