import { useContext } from 'react'

import { PaginateContext } from '@crdr/context'
import { useWindowSize } from '@crdr/hooks'

import { MyPagination, ShowBy } from '@crdr/components'
import { Button } from '@crdr/ui'

import styles from './pagination-bottom.module.scss'

export const PaginationBottom = () => {
	const { isDesktop } = useWindowSize()
	const { searchCruiseCurrentPage, handlerSearchPaginate } = useContext(PaginateContext)

	return (
		<div className={styles.component}>
			<div className={styles.half}>
				<MyPagination
					className={styles.pagination}
					amountClassName={styles.amountWrapper}
					resultPerPage={10}
					resultTotal={120}
					currentPage={searchCruiseCurrentPage}
					handlerPaginate={handlerSearchPaginate}
				/>
				<Button className={styles.showMore}>
					Показать еще
				</Button>
			</div>
			{isDesktop && <ShowBy />}
		</div>
	)
}
