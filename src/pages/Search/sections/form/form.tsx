import { useContext } from 'react'

import { SearchFiltersContext } from '../../../../context'
import { Container, Heading } from '../../../../components'

import { VisibleFilters } from './visible-filters/visibleFilters'
import { HiddenFilters } from './hidden-filters/hiddenFilters'
import { Buttons } from './buttons/buttons'

import styles from './form.module.scss'

export const Form = () => {
	const { isOpen } = useContext(SearchFiltersContext)

	return (
		<Container width="full" className={styles.component}>
			<div className={styles.container}>
				<Heading className={styles.title}>
					Круизы по Карибскому морю с Royal Caribbean
				</Heading>
				<form className={styles.form}>
					<VisibleFilters />
					{isOpen && <HiddenFilters isOpen={isOpen} />}
					<Buttons />
				</form>
			</div>
		</Container>
	)
}
