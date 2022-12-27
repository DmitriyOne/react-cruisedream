import { Container, Heading } from '../../../../components'
import styles from './regions.module.scss'

export const Regions = () => {
	return (
		<Container width="full" className={styles.component}>
			<Heading as="h2" className="title-secondary">
				РЕГИОНЫ
			</Heading>
			
		</Container>
	)
}
