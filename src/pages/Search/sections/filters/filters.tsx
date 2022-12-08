import { useContext } from 'react'

import { SearchFiltersContext } from '../../../../context'
import { Container, Heading } from '../../../../components'
import { FiltersHidden, FiltersVisible } from '../../../../components/Filters'

import { Buttons } from './buttons/buttons'

import styles from './filters.module.scss'

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
					{isOpen && <FiltersHidden  isOpen={isOpen} />}
					<Buttons />
				</form>
			</div>
		</Container>
	)
}
