import { useWindowSize } from '../../../../hooks'

import { Button, Container, MyPagination, ShowBy } from '../../../../components'

import styles from './pagination-bottom.module.scss'

export const PaginationBottom = () => {
	const { isDesktop } = useWindowSize()

	return (
		<Container width="full" className={styles.component}>
			<Container
				width="containerXl"
				className={styles.container}
				direction="row"
				justify="between"
				align="center"
			>
				<div className={styles.half}>
					<MyPagination className={styles.pagination} amountClassName={styles.amountWrapper} />
					<Button className={styles.showMore}>
						Показать еще
					</Button>
				</div>
				{isDesktop && <ShowBy className={styles.showBy} />}
			</Container>
		</Container>
	)
}
