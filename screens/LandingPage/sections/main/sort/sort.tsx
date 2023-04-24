import { useContext } from 'react'

import { PaginateContext } from '@crdr/context'

import { MyPagination, ShowBy, SortBy } from '@crdr/components'

import styles from './sort.module.scss'

export const Sort = () => {
	const { landingCruiseCurrentPage, handlerLandingPaginate } = useContext(PaginateContext)

	return (
		<div className={styles.component}>
			<MyPagination
				className={styles.pagination}
				amountClassName={styles.amountWrapper}
				resultPerPage={10}
				resultTotal={120}
				currentPage={landingCruiseCurrentPage}
				handlerPaginate={handlerLandingPaginate}
			/>
			<div className={styles.sortWrapper}>
				<SortBy className={styles.sortBy} />
				<ShowBy className={styles.showBy} />
			</div>
		</div>
	)
}
