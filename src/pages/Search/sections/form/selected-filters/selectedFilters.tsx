import { useContext } from 'react'
import { Container, Heading } from '../../../../../components'
import { SearchFiltersContext } from '../../../../../context'

import styles from './selected-filters.module.scss'

export const SelectedFilters = () => {
	const { getValueRegion, } = useContext(SearchFiltersContext)

	console.log(getValueRegion)


	return (
		<Container width="full" className={styles.component}>
			<Container className={styles.container} justify="center" align="center">
				<Heading as="h3" className={styles.title}>
					Параметры поиска
				</Heading>
				<div className={styles.wrapper}>

				</div>
			</Container>
		</Container>
	)
}
