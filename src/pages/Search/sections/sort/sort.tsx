import { Container, MyPagination, SortBy, ShowBy } from '../../../../components'

import styles from './sort.module.scss'

export const Sort = () => {

	return (
		<Container width="full" className={styles.component}>
			<Container
				width="containerXl"
				className={styles.container}
				direction="row"
				justify="between"
				align="center"
			>
				<MyPagination
					className={styles.pagination}
					amountClassName={styles.amountWrapper}
				/>
				<div className={styles.sortWrapper}>
					<SortBy className={styles.sortBy} />
					<ShowBy className={styles.showBy} />
				</div>
			</Container>
		</Container>
	)
}
