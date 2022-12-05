import { Container, MyPagination } from '../../../../components'
import styles from './sort.module.scss'

export const Sort = () => {
	return (
		<Container width="full" className={styles.component}>
			<Container width="containerXl" className={styles.container}>
				<MyPagination />
			</Container>
		</Container>
	)
}
