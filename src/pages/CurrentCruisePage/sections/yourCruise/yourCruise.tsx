import { Container, Heading } from '../../../../components-ui'
import { CruiseYourChoose } from '../../../../components/Cruise'

import styles from './your-cruise.module.scss'

export const YourCruise = () => {
	return (
		<Container width="full" className={styles.component} tag="section">
			<Container width="containerS" direction="column" align="start">
				<Heading as="h4" className={styles.title}>
					ОПИСАНИЕ ВАШЕГО КРУИЗА
				</Heading>
				<CruiseYourChoose />
			</Container>
		</Container>
	)
}
