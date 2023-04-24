import { Container } from '@crdr/ui'

import { Card } from '../card'

import { PaginationBottom } from './paginationBottom/paginationBottom'
import { Sort } from './sort/sort'

import styles from './main.module.scss'

export const Main = () => {

	return (
		<Container width="full" className={styles.component} tag="section">
			<Container width="container" direction="column" align="start">
				<Sort />
				<Card />
				<Card />
				<Card />
				<Card />
				<PaginationBottom />
			</Container>
		</Container>
	)
}
