import { useContext } from 'react'

import { SearchFiltersContext } from '../../context'
import { Container, Heading } from '../../components'

import { FiltersVisible } from './FiltersVisible/FiltersVisible'
import { FiltersHidden } from './FiltersHidden/FiltersHidden'
import { FilterButtons } from './FilterButtons/FilterButtons'

import styles from './filter.module.scss'

export const Filters = () => {
	const { isOpen } = useContext(SearchFiltersContext)

	return (
		<Container width="full" className={styles.component}>
			<div className={styles.container}>
				<Heading className={styles.title}>
					Круизы по Карибскому морю с Royal Caribbean
				</Heading>
				<form className={styles.form}>
					<FiltersVisible />
					{isOpen && <FiltersHidden isOpen={isOpen} />}
					<FilterButtons />
				</form>
			</div>
		</Container>
	)
}
