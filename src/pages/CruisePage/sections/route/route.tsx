import { Container, Heading, Tabs } from '../../../../components'
import { DataTabs } from '../../../../fakedata'

import styles from './route.module.scss'

export const Route = () => {
	return (
		<Container width="full" className={styles.component}>
			<Container direction="column">
				<Heading as="h4" className={styles.title} align="center">
					ВАШ МАРШРУТ
				</Heading>
				<Tabs
					items={DataTabs}
				/>
			</Container>
		</Container>
	)
}
