import { tabs } from './data/tabs'

import { Container, Heading, Tabs } from '../../../../components-ui'

import styles from './route.module.scss'

export const Route = () => {

	return (
		<Container id="route" width="full" className={styles.component} tag="section">
			<Container direction="column">
				<Heading as="h4" className={styles.title} align="center">
					ВАШ МАРШРУТ
				</Heading>
				<Tabs
					headerClass={styles.tabsHeader}
					items={tabs}
					bodyClass={styles.tabsBody}
					titleClass={styles.tabsTitle}
					titleActiveClass={styles.active}
				/>
			</Container>
		</Container>
	)
}
