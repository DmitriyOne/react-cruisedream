import { useWindowSize } from '../../../../../hooks'

import { MyPagination, ShowBy } from '../../../../../components'
import { Button } from '../../../../../components-ui'

import styles from './pagination-bottom.module.scss'

export const PaginationBottom = () => {
	const { isDesktop } = useWindowSize()

	return (
		<div className={styles.component}>
			<div className={styles.half}>
				<MyPagination className={styles.pagination} amountClassName={styles.amountWrapper} />
				<Button className={styles.showMore}>
					Показать еще
				</Button>
			</div>
			{isDesktop && <ShowBy />}
		</div>
	)
}
