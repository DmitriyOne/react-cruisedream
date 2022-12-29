import { MyPagination, SortBy, ShowBy } from '../../../../../components'

import styles from './sort.module.scss'

export const Sort = () => {

	return (
		<div className={styles.component}>
			<MyPagination
				className={styles.pagination}
				amountClassName={styles.amountWrapper}
			/>
			<div className={styles.sortWrapper}>
				<SortBy className={styles.sortBy} />
				<ShowBy className={styles.showBy} />
			</div>
		</div>
	)
}
