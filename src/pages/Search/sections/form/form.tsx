import { Container, Heading } from '../../../../components'

import { VisibleFilters } from './visible-filters/visibleFilters'
import { Buttons } from './buttons/buttons'

import styles from './form.module.scss'
import { HiddenFilters } from './hidden-filters/hiddenFilters'

export const Form = () => {

	return (
		<Container width="full" className={styles.component}>
			<div className={styles.container}>
				<Heading className={styles.title}>
					Круизы по Карибскому морю с Royal Caribbean
				</Heading>
				<form className={styles.form}>
					<VisibleFilters />
					<HiddenFilters />
					<Buttons />
				</form>
			</div>
		</Container>
	)
}
