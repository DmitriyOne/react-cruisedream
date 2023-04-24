import { useContext } from 'react'

import { PaginateContext } from '@crdr/context'
import { useWindowSize } from '@crdr/hooks'

import { MyPagination, ShowBy } from '@crdr/components'
import { Button } from '@crdr/ui'

import styles from './pagination-bottom.module.scss'

export const PaginationBottom = () => {
	const { isDesktop } = useWindowSize()
	const { landingCruiseCurrentPage, handlerLandingPaginate } = useContext(PaginateContext)

	return (
		<div className={styles.component}>
			<div className={styles.half}>
				<MyPagination
					className={styles.pagination}
					amountClassName={styles.amountWrapper}
					resultPerPage={10}
					resultTotal={120}
					currentPage={landingCruiseCurrentPage}
					handlerPaginate={handlerLandingPaginate}
				/>
				<Button className={styles.showMore}>
					Показать еще
				</Button>
			</div>
			{isDesktop && <ShowBy />}
		</div>
	)
}
